class Person:
    def __init__(self, name, age, gender, complexion):
        self.name = name
        self.age = age
        self.gender = gender
        self.complexion = complexion

    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")

        self.name = "Lucy"
        self.age = 25
        self.gender = "Female"
        self.complexion = "Fair"

Lucy = Person("Lucy", 25, "Female", "Fair")
Lucy.display_info()