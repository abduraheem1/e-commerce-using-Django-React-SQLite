
#include<iostream>
#include <vector>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int data1, Node* next1) {
        data = data1;
        next = next1;
    }

    Node(int data1) {
        data = data1;
        next = nullptr;
    }
    Node() {
        next = nullptr;
    }
};

Node* InsertData(vector<int> arr) {
    Node* head = new Node(arr[0]);
    Node* mover = head;

    for (int i = 1; i < arr.size(); i++) {
        Node* temp = new Node(arr[i]);
        mover->next = temp;
        mover = temp;
    }
    return head;
}

int lengthChecker(Node* head) {
    Node* temp = head;
    int count = 0;
    while (temp != nullptr) {
        temp = temp->next;
        count++;
    }
    return count;
}

bool checkIfPresent(Node* head, int value) {
    Node* temp = head;
    while (temp != nullptr) {
        if ((temp->data) == value) {
            return true;
        }
        temp = temp->next;
    }
    return false;
}

Node* ReverseASLL(Node* head) {
    Node* dummy = head;
    Node* temp = head->next;
    Node* dummy2 = head;

    dummy->next = nullptr;
    while (temp != nullptr) {
        dummy2=temp->next;
        temp->next = dummy;
        dummy = temp;
        temp = dummy2;
    }
    return dummy;
}

int evenOddCheck(Node* head) {
    Node* slow = head;
    Node* fast = head;
    bool even = false;
    bool odd = false;
    while (fast->next != nullptr && fast->next->next != nullptr) {
        if (fast->next->next == nullptr) {
            even = true;
            cout << "even" << endl;
            return even;
        }
        else if (fast->next->next->next == nullptr) {
            odd = true;
            cout << "odd" << endl;
            return odd;
        }
        //else if (fast == slow) {
        //    cout << "loop" << endl;
        //    return 0;
        //}
        slow = slow->next;
        fast = fast->next->next;
    }
}

int main() {
    vector<int> arr = { 1,2,3,4,5,6,7,8,9,10 };
    Node* head = InsertData(arr);
    Node* temp = head;

    while (temp != nullptr) {
        cout << temp->data << "  ";
        temp = temp->next;
    }
    cout << "\n\n";

    evenOddCheck(head);
    //   cout << lengthChecker(head);
       //cout << "\n\n";
    /*   cout<< checkIfPresent(head, 92);*/

       //Node* newHead = ReverseASLL(head);
       //cout << " \n\n";

   //}

}