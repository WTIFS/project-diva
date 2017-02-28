#include <stdio.h>
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <set>
using namespace std;

set<string> s_set;
set<string>::iterator it;

/*vector<string> split(string s, string delimiter){
    vector<string> ret;
    if (s.length==0) return ret;
    int slen = s.length();
    int startIndex = 0;
    int index = s.find_first_of(delimiter, startIndex);
    while (index!=string::npos){
        ret.push_back(s.substr(startIndex, index-startIndex));
        startIndex = index + delimiter.length();
        index = s.find_first_of(delimiter, startIndex);
    }
    ret.push_back(s.substr(startIndex, slen-startIndex));
    return ret;
}*/

void splitAndSet(string s, string delimiter){
    if (s.length()==0) return;
    int slen = s.length();
    int startIndex = 0;
    int index = s.find_first_of(delimiter, startIndex);
    while (index!=string::npos){
        string s_sub = s.substr(startIndex, index-startIndex);
        if (s_sub.find("com")==string::npos && s_sub.find("cn")==string::npos && s_sub.find("net")==string::npos && s_sub.find("org")==string::npos) {
            cout << "--INVALID MAIL: " + s_sub << endl;
        }
        else {
            cout << "--MAIL FOUND: " + s.substr(startIndex, index-startIndex) << endl;
            s_set.insert(s_sub);
        }
        startIndex = index + delimiter.length();
        index = s.find_first_of(delimiter, startIndex);
    }
    string s_sub = s.substr(startIndex, slen-startIndex);
    if (s_sub.find("com")==string::npos && s_sub.find("cn")==string::npos && s_sub.find("net")==string::npos && s_sub.find("org")==string::npos) {
        cout << "--INVALID MAIL: " + s_sub << endl;
    }
    else {
        cout << "--MAIL FOUND: " + s.substr(startIndex, index-startIndex) << endl;
        s_set.insert(s_sub);
    }
}

int main(){
    string fileName;
    string s;

    printf("%s\n", "请输入文件名称: ");
    cin >> fileName;
    string s1 = fileName + ".txt";
    string s2 = fileName + "2.txt";
    ifstream fin(s1.c_str());
    ofstream fout(s2.c_str());
    if (!fin) cout << "FILE NOT FOUND.";
    while( fin >> s )//逐词
    {
        cout << "Read from file: " << s << endl;
        if (s!="") splitAndSet(s, "###");
    }
    for (it = s_set.begin(); it!=s_set.end(); it++)
        fout << *it << endl;
    fout << flush;
    fout.close();
    fin.close();
}
