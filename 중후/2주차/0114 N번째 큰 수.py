# 백준_2075_N번째 큰 수_정렬_골드 5

import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().split()))
nums = lst
for i in range(n-1):
    lst = list(map(int, input().split()))
    nums += lst
    nums.sort()
    nums = nums[n:]
print(nums[0])
