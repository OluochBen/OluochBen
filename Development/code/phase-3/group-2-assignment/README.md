# School Management System

## **Objective:**

Practice creating classes, using inheritance, constructors, and method overriding in Python.

---

## 👨‍🏫 **Scenario:**

You are building a basic **School Management System** to keep track of people in Moringa School. There are two types of people: **Students** and **Technical Mentors**. Both share common attributes, but also have their own specific ones.

---

## 📝 **Instructions:**

### **1. Create a base class `Person`:**

* Attributes:

  * `name`
  * `age`
  * `gender`
  * `complexion`
* Method:

  * `display_info()` – prints name and age.

### **2. Create a subclass `Student` that inherits from `Person`:**

* Additional attribute:

  * `student_id`
  * `courses`
  * `mode_of_study` (Full-time, Part-time or Hybrid)
* Methods:

  * `enroll(course)` – adds a course to the list.
  * Override `display_info()` to include student ID, mode_of_study and courses.

### **3. Create a subclass `Technical Mentor` that inherits from `Person`:**

* Additional attributes:

  * `employee_id` (string)
  * `courses` (list of strings)
  * `mode_of_teaching` (Full-time, Part-time or Hybrid)
* Methods:

  * `assign_course(course)` – adds a course to the list.
  * Override `display_info()` to include employee ID, mode_of_teaching and courses.

---

## 🎮 **Testing:**

Write tests using either `unittest` or `pytest`, testing as many edge cases as possible.

Let your tests be guided by the age old saying **`Never underestimate the stupidity of the end user`**

---

## 🎮 **Optional Bonus:**

Create a simple interface that lets the user:

* Add a new student or technical mentor
* Enroll a student in a course
* Assign a subject to a technical mentor
* Display info of all people
