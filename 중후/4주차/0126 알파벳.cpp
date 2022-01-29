#include <iostream>
using namespace std;

int r,c,visited[27],result = 0;
int dx[4] = {0,0,1,-1};
int dy[4] = {1,-1,0,0};
char maps[21][21];

void dfs(int now_x, int now_y, int cnt)
{
	if(cnt > result) result = cnt;
	for(int i=0;i<4;i++)
	{
		int next_x = now_x + dx[i];
		int next_y = now_y + dy[i];
		if(1<=next_x and next_x<=r and 1<=next_y and next_y<=c)
		{
			if(visited[maps[next_x][next_y]-'A'] == 0)
			{
				visited[maps[next_x][next_y]-'A'] = 1;
				dfs(next_x, next_y, cnt+1);
				visited[maps[next_x][next_y]-'A'] = 0;
			}
		}
	}
} 

int main()
{
	cin >> r >> c;
	for(int i=1;i<r+1;i++)
	{
		for(int j=1;j<c+1;j++)
		{
			cin >> maps[i][j];
		}		
	}	
		
	visited[maps[1][1]-'A'] = 1;
	dfs(1,1,1);
	
	cout << result;
} 
