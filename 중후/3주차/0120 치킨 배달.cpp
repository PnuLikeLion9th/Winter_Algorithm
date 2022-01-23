#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, m, graph[51][51], visited[14];
int result=465481165;
vector<pair<int, int>> chicken;

void ChickenDis(vector<pair<int, int>> comb)
{
	int UrbanDis = 0;
	for(int i=1;i<n+1;i++)
	{
		for(int j=1;j<n+1;j++)
		{
			if(graph[i][j] == 1)
			{
				int Dis=123646151;
				for(int k=0;k<m;k++)
				{
					int x = comb[k].first;
					int y = comb[k].second;
					int New = abs(i-x) + abs(j-y);
					if(Dis > New) Dis = New;
				}
				UrbanDis += Dis;
			}		
		}
	}
	
	result = min(result, UrbanDis);
	return;
}

void Combination(vector<pair<int, int>> comb, int idx, int depth)
{
	if(m == depth)
	{
		ChickenDis(comb);
		return;
	}
	else
	{
		for(int i=idx;i<chicken.size();i++)
		{
			comb[depth] = chicken[i];
			Combination(comb, i+1, depth+1);
		}
	}
}

int main()
{
	scanf("%d %d", &n, &m);
	
	int value;
	for(int i=1;i<n+1;i++)
	{
		for(int j=1;j<n+1;j++)
		{
			scanf("%d", &value);
			if(value == 2) chicken.push_back(make_pair(i, j));
			else graph[i][j] = value;		
		}
	}
	
	vector<pair<int, int>> comb(m);
	Combination(comb, 0, 0);
	
	printf("%d", result);
}
