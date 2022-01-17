#include <iostream>
#include <math.h>
#include <vector>
using namespace std;

int input[10024];
int k;
vector<int> arr[10];
void InsertTree(int depth, int start, int end)
{
	if (start >= end) return;

	int mid = (start + end) / 2;

	arr[depth].push_back(input[mid]);
	InsertTree(depth + 1, start, mid);
	InsertTree(depth + 1, mid + 1, end);
}

int main()
{
	int k;
	cin >> k;
	int num;
	int idx = 0;
	while (cin >> num) {
		input[idx++] = num;
	}

	InsertTree(0, 0, idx);

	for (int i = 0; i < k; i++)
	{
		for (auto o : arr[i]) cout << o << ' ';
		cout << '\n';
	}
}