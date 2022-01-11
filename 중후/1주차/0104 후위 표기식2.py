# 백준_1935_후위 표기식2_스택_실버 3

import sys
input = sys.stdin.readline

n = int(input())
lst = input().strip()
nums = []
for i in range(n):
    nums.append(float(input()))

stack = []
for i in range(len(lst)):
    if lst[i] in ['+', '-', '*', '/']:
        val1 = stack.pop()
        val2 = stack.pop()
        if lst[i] == '+':
            stack.append(val2+val1)
        elif lst[i] == '-':
            stack.append(val2-val1)
        elif lst[i] == '*':
            stack.append(val2*val1)
        elif lst[i] == '/':
            stack.append(val2/val1)
    else:
        stack.append(nums[ord(lst[i]) - ord('A')])
print(format(stack[-1], ".2f"))