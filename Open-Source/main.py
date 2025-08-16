class Student:

    def __init__(self, name, age, roll, standard):
        self.name = name
        self.age = age
        self.roll = roll
        self.standard = standard
    
    def greet(self):
        print(f'Good morning, {self.name}')

a = Student('Divyanshu', 20, 12, 'XII')
a.greet()
print(f'Name:{a.name}\nAge:{a.age}\nRoll Number:{a.roll}\nStandard:{a.standard}')
