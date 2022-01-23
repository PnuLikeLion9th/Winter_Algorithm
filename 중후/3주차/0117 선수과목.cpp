#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int n,m,indegree[1001];
vector<int> subject[1001];

int main()
{
	cin >> n >> m;
	
	int a,b;
	for(int i=0;i<m;i++)
	{
		cin >> a >> b;
		indegree[b]++;
		subject[a].push_back(b);
	}
	
	queue<int> Q;
	for(int i=1;i<n+1;i++)
	{
		if(indegree[i] == 0) Q.push(i);
	}
	
	int result[1001];
	fill(result, result+n+1, 1);
	for(int i=0;i<n;i++)
	{
		int now = Q.front();
		Q.pop();
		for(int next: subject[now])
		{
			indegree[next]--;
			if(indegree[next] == 0) 
			{
				Q.push(next);
				result[next] += result[now];
			}
		}
	}
	
	for(int i=1;i<n+1;i++) 
	{
		printf("%d ", result[i]);
	}
}
