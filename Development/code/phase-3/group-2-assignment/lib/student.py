import person
from person import Person

class Student(Person):
    def __init__(self, student_id, courses, mode_of_study):
        self.student_id = student_id
        self.courses = []
        self.mode_of_study = mode_of_study

    def enrol(self,course):
        self.courses.append(course)

    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"student_id: {self.student_id}")
        print(f"courses: {self.courses}")
        print(f"mode_of_study: {self.mode_of_study}")

Valentine = Student("Valentine", "20", "1240", "Software_Engineering","Part_Time")
Valentine.display_info()


        


    
    

 