#include <iostream>
#include <string>
using namespace std;

int row_visited[10][10], column_visited[10][10], sudoku[10][10];

void PrintResult() // 결과를 출력한다. 
{
	for(int i=1;i<10;i++)
	{
		for(int j=1;j<10;j++)
		{
			cout << sudoku[i][j];
		}
		cout << endl;
	}
	exit(0);
}

bool MiniBox(int x, int y, int z) // 3x3 행렬을 검사한다. 
{
	int x_range = (x-1)/3;
	int y_range = (y-1)/3;
	for(int i=x_range*3+1;i<=x_range*3+3;i++)
	{
		for(int j=y_range*3+1;j<=y_range*3+3;j++)
		{
			if(sudoku[i][j] == z) return false; // 같은 숫자가 존재하면 False 
		}
	}
	
	return true; // 같은 숫자가 없기 때문에 통과! 
}

void BackTracking(int x, int y)
{
	if(sudoku[x][y]) // 입력돼있는 칸이라면 
	{
		if(y == 9) // 마지막 열일 경우 
		{
			if(x == 9) PrintResult(); // 결과 출력 함수 실행 
			else BackTracking(x+1, 1); // 행 바꾸기
		}
		else BackTracking(x, y+1); // 다음칸으로 넘어간다. 
	}
	else
	{
		for(int i=1;i<11;i++)
		{
			if(i == 10) return; // 탐색을 다 했으나 알맞은 숫자가 없을 때 백트래킹을 한다. 
			if(row_visited[x][i] == 0 and column_visited[y][i] == 0 and  MiniBox(x,y,i) == 1) // 스도쿠의 규칙을 지키는지 
			{
				row_visited[x][i] = 1;
				column_visited[y][i] = 1;
				sudoku[x][y] = i;
				
				BackTracking(x,y);
				
				row_visited[x][i] = 0;
				column_visited[y][i] = 0;
				sudoku[x][y] = 0;
			}
		}
	}
} 

int main()
{
	for(int i=1;i<10;i++)
	{
		string s;
		cin >> s;
		for(int j=1;j<10;j++)
		{
			int num = 0;
			num = s[j-1] - '0';
			sudoku[i][j] = num;
			row_visited[i][num] = 1; // sudoku의 i행에 num이라는 숫자가 존재한다. 
			column_visited[j][num] = 1; // sudoku의 j열에 num이라는 숫자가 존재한다. 
		}
	}
	
	BackTracking(1,1);
}
