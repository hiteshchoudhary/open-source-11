#done by dev for devs
number = int(input("How many times you'd like to print hello"))
name = input("enter your name")
def printing_hello(number, name):
	for i in range(number):
		print(f'hello {name}, how are you?')

def main():
	printing_hello(number, name)

if __name__ == "__main__":
	main()
	
	

