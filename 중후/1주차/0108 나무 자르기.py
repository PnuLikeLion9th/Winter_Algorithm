# 백준_2805_나무 자르기_이분 탐색_실버 3

import sys
input = sys.stdin.readline

def binary_search(start, end):
    global flag
    if flag or start > end:
        return

    mid = (start + end)//2
    h = 0

    for i in tree:
        if i-mid > 0:
            h += i - mid
    if h == m:
        flag = mid
        return
    if h > m:
        result.append(mid)
        return binary_search(mid+1, end)
    if h < m:
        return binary_search(start, mid-1)
        
n,m = map(int,input().split())
tree = list(map(int,input().split()))

flag = 0
result = [0]
binary_search(0, max(tree))