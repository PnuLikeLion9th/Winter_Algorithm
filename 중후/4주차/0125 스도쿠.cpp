#include <iostream>
#include <string>
using namespace std;

int row_visited[10][10], column_visited[10][10], sudoku[10][10];

void PrintResult() // ����� ����Ѵ�. 
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

bool MiniBox(int x, int y, int z) // 3x3 ����� �˻��Ѵ�. 
{
	int x_range = (x-1)/3;
	int y_range = (y-1)/3;
	for(int i=x_range*3+1;i<=x_range*3+3;i++)
	{
		for(int j=y_range*3+1;j<=y_range*3+3;j++)
		{
			if(sudoku[i][j] == z) return false; // ���� ���ڰ� �����ϸ� False 
		}
	}
	
	return true; // ���� ���ڰ� ���� ������ ���! 
}

void BackTracking(int x, int y)
{
	if(sudoku[x][y]) // �Էµ��ִ� ĭ�̶�� 
	{
		if(y == 9) // ������ ���� ��� 
		{
			if(x == 9) PrintResult(); // ��� ��� �Լ� ���� 
			else BackTracking(x+1, 1); // �� �ٲٱ�
		}
		else BackTracking(x, y+1); // ����ĭ���� �Ѿ��. 
	}
	else
	{
		for(int i=1;i<11;i++)
		{
			if(i == 10) return; // Ž���� �� ������ �˸��� ���ڰ� ���� �� ��Ʈ��ŷ�� �Ѵ�. 
			if(row_visited[x][i] == 0 and column_visited[y][i] == 0 and  MiniBox(x,y,i) == 1) // �������� ��Ģ�� ��Ű���� 
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
			row_visited[i][num] = 1; // sudoku�� i�࿡ num�̶�� ���ڰ� �����Ѵ�. 
			column_visited[j][num] = 1; // sudoku�� j���� num�̶�� ���ڰ� �����Ѵ�. 
		}
	}
	
	BackTracking(1,1);
}
