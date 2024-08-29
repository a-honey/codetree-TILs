#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    double a = 25.352;

    a = round(a * 10) / 10;

    cout << fixed << setprecision(1) << a;
    return 0;
}