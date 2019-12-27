#include <stdio.h>
#include <math.h>
#define PI 3.14159

int main() {
   double angle, radian, sine, cosine;
   printf("input:");
   scanf("%f", &angle);
   radian=PI*angle/180;
   sine=sin(radian);
   cosine=sqrt(1-sine*sine);
   printf("%f\n", angle);
   printf("%f\n", radian);
   printf("%f\n %f\n", sine, cosine);
   return 0;
}