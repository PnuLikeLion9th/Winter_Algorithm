#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int n,m,indegree[1001];
vector<int> sing[1001];

int main()
{
    cin >> n >> m;
    for(int i=0;i<m;i++)
    {
        int s,x;
        cin >> s >> x;
        s--;
        while(s--)
        {
            int y;
            cin >> y;
            indegree[y]++;
            sing[x].push_back(y);
            x=y;
        }
    }
    
    queue<int> Q;
    for(int i=1;i<n+1;i++)
    {
        if(indegree[i] == 0) Q.push(i);
    }
    
    vector<int> result;
    while(!Q.empty())
    {
        int now = Q.front();
        Q.pop();
        result.push_back(now);
        for(int next: sing[now])
        {
            if(--indegree[next] == 0) Q.push(next);
        }
    }
     
    if(result.size() != n) cout << 0;
    else
    {
        for(int i=0;i<n;i++) cout << result[i] << endl;
    }
}
