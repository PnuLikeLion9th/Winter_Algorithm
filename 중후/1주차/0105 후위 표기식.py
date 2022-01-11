# 백준_1918_후위 표기식_스택_골드 3

def precedence(ch): # 우선순위 판별 함수
    if ch == '(' or ch == ')': return 0
    elif ch == '+' or ch == '-': return 1
    elif ch == '*' or ch == '/': return 2
    else: return -1

lst = input()
stack = [] # 연산자들을 담는 list
result = ''
for i in lst:
    if i == '(':
        stack.append(i)
    elif i == ')':
        while stack: # '('가 나올 때 까지 stack에 있는 연산자들을 pop한다
            temp = stack.pop()
            if temp == '(': break
            else:
                result += temp
    elif i in '+-*/':
        while stack: # stack[-1]이 i보다 우선순위가 같거나 클 경우 pop한다
            temp = stack[-1]
            if precedence(i) <= precedence(temp):
                result += stack.pop()
            else: break
        stack.append(i)
    else: # 피연산자의 경우 바로 더해준다
        result += i
while stack: # 남아있는 연산자를 바로 더해준다.
    result += stack.pop()

print(result)