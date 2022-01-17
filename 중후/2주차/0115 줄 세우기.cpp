#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int n,m,indegree[32001] = {0};
vector<int> student[32001];
queue<int> Q;

int main()
{
	cin >> n >> m;
	
	int a,b;
	for(int i=0;i<m;i++)
	{
		cin >> a >> b;
		indegree[b]++;
		student[a].push_back(b);
	}
	
	for(int i=1;i<n+1;i++)
	{
		if(indegree[i] == 0) Q.push(i);
	}
	
	for(int i=0;i<n;i++)
	{
		int now = Q.front();
		Q.pop();
		printf("%d ", now);
		
		for(int next: student[now])
		{
			indegree[next]--;
			if(indegree[next] == 0) Q.push(next);
		}
	} 
}
