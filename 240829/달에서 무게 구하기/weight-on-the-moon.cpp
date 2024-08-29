#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    float a = 0.165000;
    
    cout << 13 << " * " << fixed << setprecision(6) << a << " = ";
    cout << fixed << setprecision(6) << 13*a;
    return 0;
}