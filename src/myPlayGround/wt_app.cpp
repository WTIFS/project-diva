/*
 * Copyright (C) 2008 Emweb bvba, Heverlee, Belgium.
 *
 * See the LICENSE file for terms of use.
 */

#include <Windows.h>


#include <Wt/WApplication>
#include <Wt/WBreak>
#include <Wt/WContainerWidget>
#include <Wt/WLineEdit>
#include <Wt/WPushButton>
#include <Wt/WHBoxLayout>
#include <Wt/WVBoxLayout>
#include <Wt/WText>

#include <Wt/WFileUpload>
#include <Wt/WProgressBar>
#include <Wt/WEnvironment>
#include <Wt/WImage>


#include "ImageAnalysisLib.h"

// c++0x only, for std::bind
// #include <functional>

using namespace Wt;

class PhotoSearchingApp: public WApplication {
public:
    PhotoSearchingApp(const WEnvironment& env);

private:

    //WPushButton *m_uploadButton;
    Wt::WFileUpload *m_fu;

	WVBoxLayout *m_vbox;
	WHBoxLayout *m_hbox[2];
	WVBoxLayout *m_vImagebox;

	WContainerWidget *m_mainContainer;

	WPushButton *ms_fileMatchButton;
	WPushButton *ms_rgbMatchButton;
	WPushButton *ms_rgbHistButton;
	WPushButton *ms_hueMatchButton;
	WPushButton *ms_hueHistButton;
	WPushButton *ms_ownButton;

    void UploadFile();
	void FileMatching();
	void RGBMatching();
	void HueMatching();
	void RGBHistMatching();
	void HueHistMatching();
	void OwnFeatureMatching();
	void ButtonEnable();
	void ButtonDisable();

	void FileUploaded();

	void PerformSearching(std::string filepath);

	int m_searchFlag;

	enum {
		SEARCHING_NONE_ = 0,
		SEARCHING_OWN_FEATURES_,
		SEARCHING_FILE_,
		SEARCHING_RGB_MATCH_,
		SEARCHING_HUE_MATCH_,
		SEARCHING_RGB_HIST_,
		SEARCHING_HUE_HIST_
	};
};

PhotoSearchingApp::PhotoSearchingApp(const WEnvironment& env) :
        WApplication(env) {
    root()->addStyleClass("container");
    setTitle("Photo Searching");       // application title
	
	m_searchFlag = SEARCHING_NONE_;

	m_mainContainer = new WContainerWidget(this->root());

	m_vbox = new WVBoxLayout();
    m_vbox->setSpacing(10);
    m_vbox->setContentsMargins(0,0,0,0);
	m_mainContainer->setLayout(m_vbox);

	for(int i=0 ; i<2 ; i++){
		m_hbox[i] = new WHBoxLayout();
		m_hbox[i]->setSpacing(10);
		m_hbox[i]->setContentsMargins(0,0,0,0);
		m_vbox->addLayout(m_hbox[i]);
	}

	m_vImagebox = new WVBoxLayout();
	m_vImagebox->setSpacing(10);
    m_vImagebox->setContentsMargins(0,0,0,0);
	m_vbox->addLayout(m_vImagebox);

    // Provide a button to start uploading.
	m_fu = new Wt::WFileUpload();
    m_fu->setFileTextSize(4*3*1920); // Set the maximum file size to 4*3*1920 kB.
    //fu->setProgressBar(new Wt::WProgressBar());
    m_fu->setMargin(10, Wt::Right);
	m_hbox[0]->addWidget(m_fu);
	/*
    m_uploadButton = new Wt::WPushButton("Send");
    m_uploadButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[0]->addWidget(m_uploadButton);
	*/
	ms_fileMatchButton = new Wt::WPushButton("File Match");
    ms_fileMatchButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[1]->addWidget(ms_fileMatchButton);

	ms_rgbMatchButton = new Wt::WPushButton("RGB Color Match");
    ms_rgbMatchButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[1]->addWidget(ms_rgbMatchButton);

	ms_hueMatchButton = new Wt::WPushButton("HUE Color Match");
    ms_hueMatchButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[1]->addWidget(ms_hueMatchButton);

	ms_rgbHistButton = new Wt::WPushButton("RGB Histogram Match");
    ms_rgbHistButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[1]->addWidget(ms_rgbHistButton);

	ms_hueHistButton = new Wt::WPushButton("HUE Histogram Match");
    ms_hueHistButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[1]->addWidget(ms_hueHistButton);

	ms_ownButton = new Wt::WPushButton("Own Features Match");
    ms_ownButton->setMargin(10, Wt::Left | Wt::Right);
	m_hbox[1]->addWidget(ms_ownButton);

	// Upload when the button is clicked.
    //m_uploadButton->clicked().connect(this, &PhotoSearchingApp::UploadFile);
	ms_fileMatchButton->clicked().connect(this, &PhotoSearchingApp::FileMatching);
	ms_rgbMatchButton->clicked().connect(this, &PhotoSearchingApp::RGBMatching);
	ms_hueMatchButton->clicked().connect(this, &PhotoSearchingApp::HueMatching);
	ms_rgbHistButton->clicked().connect(this, &PhotoSearchingApp::RGBHistMatching);
	ms_hueHistButton->clicked().connect(this, &PhotoSearchingApp::HueHistMatching);
	ms_ownButton->clicked().connect(this, &PhotoSearchingApp::OwnFeatureMatching);

	m_fu->uploaded().connect(this, &PhotoSearchingApp::FileUploaded);

	const std::string *fileUpload =	env.getParameter("fileUpload");
	if (fileUpload && !fileUpload->empty()){
	//	greet();
	}
}

void PhotoSearchingApp::ButtonEnable()
{
	ms_fileMatchButton->enable();
	ms_rgbMatchButton->enable();
	ms_rgbHistButton->enable();
	ms_hueMatchButton->enable();
	ms_hueHistButton->enable();
	ms_ownButton->enable();
}

void PhotoSearchingApp::ButtonDisable()
{
	ms_fileMatchButton->disable();
	ms_rgbMatchButton->disable();
	ms_rgbHistButton->disable();
	ms_hueMatchButton->disable();
	ms_hueHistButton->disable();
	ms_ownButton->disable();
}

void PhotoSearchingApp::UploadFile() {
    m_fu->upload();
    //m_uploadButton->disable();
	ButtonDisable();
}

void PhotoSearchingApp::FileMatching() {
	m_searchFlag = SEARCHING_FILE_;
	UploadFile();
}

void PhotoSearchingApp::RGBMatching(){
	m_searchFlag = SEARCHING_RGB_MATCH_;
	UploadFile();
}

void PhotoSearchingApp::HueMatching(){
	m_searchFlag = SEARCHING_HUE_MATCH_;
	UploadFile();
}

void PhotoSearchingApp::RGBHistMatching(){
	m_searchFlag = SEARCHING_RGB_HIST_;
	UploadFile();
}

void PhotoSearchingApp::HueHistMatching(){
	m_searchFlag = SEARCHING_HUE_HIST_;
	UploadFile();
}

void PhotoSearchingApp::OwnFeatureMatching(){
	m_searchFlag = SEARCHING_OWN_FEATURES_;
	UploadFile();
}

void PhotoSearchingApp::FileUploaded() {
	if(!m_fu->empty()){
		//The uploaded filename
		std::string mFilename = m_fu->spoolFileName(); 

		//The file contents
		std::vector<Wt::Http::UploadedFile> mFileContents = m_fu->uploadedFiles();

		//The file is temporarily stored in a file with location here
		std::string mContents;
		mContents=mFileContents.data()->spoolFileName();

		//Do something with the contents here
		//Either read in the file or copy it to use it
		std::cout << std::endl;
		std::cout << "$$$$$$$$$$$$$$$$$ uploaded as: " << mFilename << " $$$$$$$$$$$$$$$$$" << std::endl;
		WString realname = m_fu->clientFileName();
		std::cout << "---" << realname.toUTF8().c_str() << "---" << std::endl;
		std::string targetfile = std::string("./Images/query/" + realname.toUTF8());

		int cp_rt = CopyFile(mFilename.c_str(), targetfile.c_str(), 0);
		if(cp_rt){
			PerformSearching(targetfile);
		}
	}

	//m_uploadButton->enable();
	ButtonEnable();

    return;
}

double CompareNone(ImageInfo *image1, ImageInfo *image2){
	return 1.0000;
}

/// comparing the two file streams directly
double CompareFile(ImageInfo *image1, ImageInfo *image2){
	std::string filepath1 = image1->dirpath + "/" + image1->filename;
	std::string filepath2 = image2->dirpath + "/" + image2->filename;

	/// TODO: read the file streams, and compare the file streams difference

	return 1.0000;
}

/// comparing the two images in RGB color space
double CompareRGBImage(ImageInfo *image1, ImageInfo *image2){
	if(image1->width != image2->width || image1->height != image2->height){
		return 0.0000;
	}

	unsigned char *rgb1 = image1->imageRGB;
	unsigned char *rgb2 = image2->imageRGB;
	int width	= image1->width;
	int height	= image1->height;

	double score = 1.0000;

	for(int j=0 ; j<height ; j++){
		for(int i=0 ; i<width ; i++){
			int b1 = rgb1[(i+j*width)*3+0];
			int g1 = rgb1[(i+j*width)*3+1];
			int r1 = rgb1[(i+j*width)*3+2];
			int b2 = rgb2[(i+j*width)*3+0];
			int g2 = rgb2[(i+j*width)*3+1];
			int r2 = rgb2[(i+j*width)*3+2];

			/// TODO: compare the difference of rgb values between rgb1 and rgb2
			/// NOTE: each of r, g, b values are ranging from [0..255]

		}
	}

	return score;
}

/// comparing the two image color histogram in RGB color space
double CompareRGBHistogram(ImageInfo *image1, ImageInfo *image2){
#define HISTOGRAM_DIMENSION		16
#define HISTOGRAM_BIN_RANGE		(256/HISTOGRAM_DIMENSION)

	unsigned int RGBHistogram1[HISTOGRAM_DIMENSION][HISTOGRAM_DIMENSION][HISTOGRAM_DIMENSION];
	unsigned int RGBHistogram2[HISTOGRAM_DIMENSION][HISTOGRAM_DIMENSION][HISTOGRAM_DIMENSION];

	unsigned char *rgb1 = image1->imageRGB;
	unsigned char *rgb2 = image2->imageRGB;
	int width1	= image1->width;
	int height1	= image1->height;
	int width2	= image2->width;
	int height2	= image2->height;

	/// Init histograms
	for(int i=0 ; i<HISTOGRAM_DIMENSION ; i++){
		for(int j=0 ; j<HISTOGRAM_DIMENSION ; j++){
			for(int k=0 ; k<HISTOGRAM_DIMENSION ; k++){
				RGBHistogram1[i][j][k] = 0;
				RGBHistogram2[i][j][k] = 0;
			}
		}
	}

	/// TODO: Construct a RGB Histgram with 16x16x16
	/// histogram image 1
	for(int j=0 ; j<height1 ; j++){
		for(int i=0 ; i<width1 ; i++){
			int b1 = rgb1[(i+j*width1)*3+0];
			int g1 = rgb1[(i+j*width1)*3+1];
			int r1 = rgb1[(i+j*width1)*3+2];

		}
	}

	/// histogram image 2
	for(int j=0 ; j<height2 ; j++){
		for(int i=0 ; i<width2 ; i++){
			int b2 = rgb2[(i+j*width2)*3+0];
			int g2 = rgb2[(i+j*width2)*3+1];
			int r2 = rgb2[(i+j*width2)*3+2];

		}
	}

	/// TODO: normalize the histogram

	/// TODO: Compare the histograms
	double score = 1.0000;
	
	return score;

#undef HISTOGRAM_DIMENSION
#undef HISTOGRAM_BIN_RANGE
}

/// comparing the two images in Hue color space
double CompareHueImage(ImageInfo *image1, ImageInfo *image2){
	if(image1->width != image2->width || image1->height != image2->height){
		return 0.0000;
	}

	unsigned short *hue1 = image1->imageHue;
	unsigned short *hue2 = image2->imageHue;
	int width	= image1->width;
	int height	= image1->height;

	double score = 1.0000;

	for(int j=0 ; j<height ; j++){
		for(int i=0 ; i<width ; i++){
			int h1 = hue1[i+j*width];
			int h2 = hue2[i+j*width];

			/// TODO: compare the difference of hue values between hue1 and hue2
			/// NOTE: each of hue values are ranging from [0..360]
			/// NOTE: You can ignore all pixels with hue value = 0

		}
	}

	return score;
}

/// comparing the two image color histogram in Hue color space
double CompareHueHistogram(ImageInfo *image1, ImageInfo *image2){
#define HISTOGRAM_DIMENSION		20
#define HISTOGRAM_BIN_RANGE		(360/HISTOGRAM_DIMENSION)

	unsigned int histogram1[HISTOGRAM_DIMENSION];
	unsigned int histogram2[HISTOGRAM_DIMENSION];

	unsigned short *hue1 = image1->imageHue;
	unsigned short *hue2 = image2->imageHue;
	int width1	= image1->width;
	int height1	= image1->height;
	int width2	= image2->width;
	int height2	= image2->height;

	/// Init histograms
	for(int i=0 ; i<HISTOGRAM_DIMENSION ; i++){
		histogram1[i] = 0;
		histogram2[i] = 0;
	}

	/// TODO: Construct a HUE Histgram with 20
	/// NOTE: You can ignore all pixels with hue value = 0
	/// histogram image 1
	for(int j=0 ; j<height1 ; j++){
		for(int i=0 ; i<width1 ; i++){
			int h1 = hue1[i+j*width1];

		}
	}

	/// histogram image 2
	for(int j=0 ; j<height2 ; j++){
		for(int i=0 ; i<width2 ; i++){
			int h2 = hue2[i+j*width2];

		}
	}

	/// TODO: normalize the histogram

	double score = 1.0000;

	/// TODO: Compare the histograms

	return score;

#undef HISTOGRAM_DIMENSION
#undef HISTOGRAM_BIN_RANGE
}

/// comparing the two image with own features
double CompareOwnFeatures(ImageInfo *image1, ImageInfo *image2){
	/// TODO: Compare using own features

	double score = 1.0000;

	return score;
}


#define IMAGE_DB_PATH	"Images/imagefiles.db"
#define RESULT_DB_PATH	"Images/searchResult.db"

void PhotoSearchingApp::PerformSearching(std::string filepath)
{
	/// clear the previous result view
	m_vImagebox->clear();

	/// read files
	ImageAnalysisLib *pImageProc = new ImageAnalysisLib();

	switch(m_searchFlag){
	case SEARCHING_NONE_: 
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareNone);
		break;
	case SEARCHING_FILE_: 
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareFile);
		break;
	case SEARCHING_RGB_MATCH_: 
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareRGBImage, 1);
		break;
	case SEARCHING_HUE_MATCH_: 
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareHueImage, 1);
		break;
	case SEARCHING_RGB_HIST_: 
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareRGBHistogram);
		break;
	case SEARCHING_HUE_HIST_: 
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareHueHistogram);
		break;
	case SEARCHING_OWN_FEATURES_:
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareOwnFeatures);
		break;
	default:
		pImageProc->SearchingImages(filepath, StdString(IMAGE_DB_PATH), StdString(RESULT_DB_PATH), CompareNone);
		break;
	};

	ImageSearchResult *pResult = NULL;

	CDBImageSearchResult *pdb = pImageProc->GetResultDBHandle();

	int rcnt = pdb->GetSearchResults(&pResult);

	const int width_fix = 180;

	if(pResult){

		WHBoxLayout *phLayout = NULL;

		for(int i=0 ; i<rcnt ; i++){

			int height = (pResult[i].imgInfo.height * width_fix) / pResult[i].imgInfo.width;

			std::string filepath = std::string(pResult[i].imgInfo.dirpath + "/" + pResult[i].imgInfo.filename);

			WImage *pImgView = new WImage(WLink(filepath));
			
			char scoreMsg[256];
			sprintf(scoreMsg, "\nscore: %.2f", pResult[i].matchScore);

			WText *txt_ImgName = new WText(pResult[i].imgInfo.filename);
			WText *txt_ImgScore = new WText(std::string(scoreMsg));

			pImgView->resize(width_fix, height);

			if(i%3 == 0){
				phLayout = new WHBoxLayout();
			}

			WVBoxLayout *pvLayout = new WVBoxLayout();
			phLayout->addWidget(pImgView);
			phLayout->addLayout(pvLayout);
			pvLayout->addWidget(txt_ImgName);
			pvLayout->addWidget(txt_ImgScore);

			if(i%3 == 0){
				m_vImagebox->addLayout(phLayout);
			}
		}

		pdb->ClearSearchResults(&pResult);
	}

	delete pImageProc;
}

WApplication *createApplication(const WEnvironment& env) {

    return new PhotoSearchingApp(env);
}

int main(int argc, char **argv) {
    return WRun(argc, argv, &createApplication);
}
