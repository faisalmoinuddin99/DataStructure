/* STACK IMPLEMENTATION USING STATIC MEMORY ALLOCATION*/
#include<stdio.h>
#define CAPACITY 5 //pre-processor macro
int stack[CAPACITY],top=-1;
void push(int);
int pop();
int isFull();
int isEmpty();
void peek();
void traverse();
void main()

{
    int ch,item;
    while(1)
    {
        
    printf("1.push\n");
    printf("2.pop\n");
    printf("3.peek\n");
    printf("4.traverse\n");
    printf("5.quit\n");
    
    printf("Enter your choice:");
    scanf("%d",&ch);
    
    switch(ch){
        case 1 :  printf("Enter the element to push:\n\n");
                  scanf("%d",&item);
                  push(item);
                  break;
        case 2 : item = pop();
                    if(item == 0){
                        printf("stack underflow");
                    }
                    else{
                        printf("popped item is %d \n\n",item);
                    }
                    
                    break;
                    
        case 3 :  peek();
        
                    break;
                    
        case 4 :  traverse();
                    
                    break;
        
        case 5 :  exit(0);
        
                    break;
        
        default:  printf("invalid input \n \n");
    }

        
    
    }
}


void push(int ele)
{
    if(isFull()){
        printf("Stack is overflow");
    }
    else{
        top++;
        stack[top]=ele;
        printf("%d item pushed \n",ele);
    }
}

int isFull(){
    if(top == CAPACITY - 1){
        return 1;
    }
    else{
        return 0;
    }
}


int pop(){
    if(isEmpty()){
        
        return 0;
    }
    else{
        return stack[top--];
    }
}

int isEmpty(){
    if(top == -1){
        return 1;
    }
    else{
        return 0;   
    }
}


void peek(){
    if(isEmpty()){
        printf("stack is empty\n\n");
    }
    else{
        printf("peek element : %d \n\n",stack[top]);
    }
}

void traverse(){
    if(isEmpty()){
        printf("Stack is empty\n\n");
    }
    else{
        int i;
        printf("stack elements are:\n\n");
        for(i=0;i<=top;i++){
            printf("%d ",stack[i]);
        }
    }
}