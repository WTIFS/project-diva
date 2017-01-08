#include <cstdio>

int n, m, ans;

int main() {
	int t, tt;
	scanf("%d", &t);
	for (int tt = 1; tt <= t; tt++) {
		scanf("%d%d", &n, &m);
		int p1 = n / 3 + (n % 3 >= 1);
		int p2 = n / 3 + (n % 3 >= 2);
		int q = m / 3 * 2 + m % 3;
		if (m <= 2) ans = (p1+p2) * m;
		else if (n <= 2) ans = n * q;
		else if (m % 3 == 0) ans = n * q;
		else if (m % 3 == 2) ans = p1 * q + (n-p1) * (q-1);
		else if (m % 3 == 1) ans = (p1+p2) * q + (n-p1-p2) * (q-1);
		printf("Case #%d: %d\n", tt, ans);
	}
	return 0;
}
