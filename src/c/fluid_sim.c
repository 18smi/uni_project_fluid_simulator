#include <stdio.h>

unsigned int box_width;
unsigned int box_height;
unsigned short number_of_particals;

int main(void){return 0;}

int i = 0;
int test_c(){
    i += 10;
    return i;
}

void chainge_box(unsigned int width, unsigned int height){
    //chainge box dimentions 
    //push out of bounds particals back in bounds     might need to be in the step_forward()
}

void chainge_number_of_particals(unsigned short new_number_of_particals){
    //spawn new particals(random pos) or delete particals 
}

unsigned int get_partical_x(unsigned short partical_number){
    //does as it says
    return 10;
}

unsigned int get_partical_y(unsigned short partical_number){
    //does as it says
    return 10;
}

void step_forward(){
    //call this to progress the simulation 1 time step
    //could have an int input for speed maybe
}