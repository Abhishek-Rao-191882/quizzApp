import turtle

# Set up the turtle screen
screen = turtle.Screen()
screen.bgcolor("lightblue")
screen.title("Radha Krishna")

# Set up the turtle
t = turtle.Turtle()
t.speed(0)

# Draw the head of Radha
t.penup()
t.goto(-50, 0)
t.pendown()
t.circle(50)

# Draw the face of Radha
t.penup()
t.goto(-20, 50)
t.pendown()
t.circle(20)
t.penup()
t.goto(-35, 60)
t.pendown()
t.dot(10)
t.penup()
t.goto(-5, 60)
t.pendown()
t.dot(10)

# Draw the hair of Radha
t.penup()
t.goto(-50, 50)
t.pendown()
t.goto(-80, 70)
t.goto(-70, 30)
t.goto(-50, 50)
t.goto(-30, 30)
t.goto(-20, 70)
t.goto(-50, 50)

# Draw the body of Radha
t.penup()
t.goto(-50, 0)
t.pendown()
t.goto(-50, -100)

# Draw the dress of Radha
t.penup()
t.goto(-50, -25)
t.pendown()
t.circle(25, 180)
t.penup()
t.goto(-50, -25)
t.pendown()
t.circle(-25, 180)

# Draw the head of Krishna
t.penup()
t.goto(50, 0)
t.pendown()
t.circle(50)

# Draw the face of Krishna
t.penup()
t.goto(20, 50)
t.pendown()
t.circle(20)
t.penup()
t.goto(5, 60)
t.pendown()
t.dot(10)
t.penup()
t.goto(35, 60)
t.pendown()
t.dot(10)

# Draw the hair of Krishna
t.penup()
t.goto(50, 50)
t.pendown()
t.goto(80, 70)
t.goto(70, 30)
t.goto(50, 50)
t.goto(30, 30)
t.goto(20, 70)
t.goto(50, 50)

# Draw the body of Krishna
t.penup()
t.goto(50, 0)
t.pendown()
t.goto(50, -100)

# Draw the dhoti of Krishna
t.penup()
t.goto(50, -50)
t.pendown()
t.goto(25, -100)
t.penup()
t.goto(50, -50)
t.pendown()
t.goto(75, -100)

# Hide the turtle and exit on click
t.hideturtle()
turtle.done()
