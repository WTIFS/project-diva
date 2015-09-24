//#include "jni.h"
#include <jni.h>
#include "others_myJNIHelloWorld.h"
#include <stdio.h>
JNIEXPORT void JNICALL Java_others_myJNIHelloWorld_DisplayHello
(JNIEnv *, jobject)
{
	printf("From JNI");
	printf("Hello world! \n");
	return;
}