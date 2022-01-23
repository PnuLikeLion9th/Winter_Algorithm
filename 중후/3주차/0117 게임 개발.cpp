#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int n, indegree[501], times[501], result[501];
vector<int> house[501];

int main()
{
	cin >> n;
	
	int time;
	for(int i=1;i<n+1;i++)
	{
		cin >> time;
		times[i] = time;
		
		int x;
		while(1)
		{
			cin >> x;
			if(x == -1) break;
			indegree[i]++;
			house[x].push_back(i);
		}
	}
	
	queue<int> Q;
	for(int i=1;i<n+1;i++)
	{
		if(indegree[i] == 0) 
		{
			Q.push(i);
			result[i] = times[i];
		}
	}
	
	for(int i=0;i<n;i++)
	{
		int now = Q.front();
		Q.pop();
		
		for(int next: house[now])
		{
			result[next] = max(result[next], result[now] + times[next]);
			if(--indegree[next] == 0) Q.push(next);
		}
	}
	
	for(int i=1;i<n+1;i++) printf("%d\n", result[i]);
}

