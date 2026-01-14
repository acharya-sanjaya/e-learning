## What is QBASIC❓

- Its is a programming language.
- FullForm: Quick Beginner's All Purpose Symbolic Instruction Code

Confused? No problem! We will learn step by step.

- Programming language is just like the language we speak.

- For example:
  - There is a pen in the table.
  - Now you want your brother to bring that pen to you.
  - What will you do?
  - You will just say: **Hey brother, bring that pen to me**.

See? That's how easy it is?

---

## 💻 Now let's think about Computers.

- You have computer in your desk and you want it to open a file.
- What will you do?
  - You will just say: **Hey computer, open that file.**

<br>
But wait, will that work?<br>
Haha, it won't work because that's not how computer works!
<br><br>

You need to **move your mouse** and **click** on the file.<br>
Then only the computer will understand that **you want to open that file**.

This is how programming is done.

---

Just like you have **grammar** in English language.<br>
Programming language also has some rules.

And that's called **SYNTAX**.<br>
Let's not worry about that for now.

---

## CLS

- CLear Screen

If you want your friend to rub the board in your class, what will you say?

- **Hey friend, clear the board**

But for computer,

- You will just write **CLS**
- Whenever you write **CLS**, the computer will **clear the screen** for you.

---

## PRINT STATEMENT

- Think **PRINT** as your **PEN** 🖊️

- What does a pen do?

  - It writes!
  - **PRINT** is the **only** thing that writes on the computer's screen.

<br>

**Example:**

```basic
PRINT "Hello"
```

Now, press **F5** and you will see:

```
Hello
```

**<span style="color: red">NOTE: </span>**
**<span style="color: lightblue">F5</span>** means **<span style="color: lightblue">RUN</span>** the program.

---

<br>

# TASK

```
1. Clear the screen
2. Tell computer to write your name
```

---

**ANSWER**

```basic
CLS
PRINT "Write my name"
```

What will be the result when you run this program?

- Computer always reads line by line.

- So, what is the first line?

  ```basic
  CLS
  ```

- Computer will **clear the screen**.<br>
  Then first line is finished.
- Now, let's move on to the second line?

  ```basic
  PRINT "Write my name"
  ```

- For this, Computer will write

  ```
  Write my name
  ```

- You see?<br>
  Computer will just follow the command you give.

- Instead of writing **Sanjaya Acharya**<br>
  It will just write: **Write my name**.

- So, be careful when giving commands.<br>
  Give it properly so the computer will understand **what exactly you want**.

- **CORRECT PROGRAM**
  ```
  CLS
  PRINT "Sanjaya Acharya"
  ```

This is how you write a program.

---

## VARIABLES

- Think VARIABLE as a box 📦

- Why do we use boxes?
  - To keep things inside!

<br>

Now, think about your kitchen

- You have 3 jars 🍶.
- All of them are red and looks exactly the same.
- One has **sugar**.
- One has **salt**.
- One has **pepper**.

Now, the problem is,<br>
How do you know which jar contains what?<br>
Simple!<br>
You just put **labels** on them!

---

- Variable is the box with a label.

  - Variable = Box.
  - Variable name = Box label.

- Example:
  ```basic
  LET x = 5
  ```
  Here, **x** is a box which has **5** in it.
  ```basic
  LET sugar = 100
  ```
  Here, **sugar** is a box which has **100** in it.

---

<br>

# TASK

- Create 3 VARIABLES and STORE 10, 20, 30 in them.

#### GOOD ANSWER

```basic
LET a = 10
LET b = 20
LET c = 30
```

#### BETTER ANSWER

```basic
LET rupees = 10
LET age = 20
LET rollNumber = 30
```

Why is this better?<br>
Because the name of the variable is **meaningful**.

---

## RULES FOR NAMING VARIABLES

Can you give a random name to a variable?<br>
Yes!<br>
Instead of writing<br>

```basic
LET rupees = 10
```

You can also write:

```basic
LET sadfhjk = 10
```

And guess what?<br>
It will work without any problem.<br>
But when you give this kind of names in big programs it will be so hard to understand what is going on.<br>
So,

---

## RULE 1:<br>Always use meaningful names for variables

<br>
Can you write 123 as a variable name?<br>
Noooooo!<br>
If 123 is a variable name which contains 5 in it,<br>
then how will it look?

```basic
LET 123 = 5
```

Is it good?<br>
Of course not!<br>
So,

## Rule 2:<br>Variable names must NEVER start with a number

But after alphabet, you can use numbers.<br>
Example:

```basic
LET age1 = 10
LET age2 = 20
```

But you can't write 1age = 10.

```basic
LET 1age = 10 ❌
LET age1 = 10 ✔️
```

## Rule 3:<br>Do not use space or any other symbols

```basic
LET my marks = 50 ❌
LET myMarks = 50  ✔️

LET age 1 = 10    ❌
LET age1 = 10     ✔️
LET #$@$# = 40    ❌
```

---

## NUMBERS AND STRINGS

- What is a number?<br>
  1, 2, 10, 100, 90, 9999<br>
  We all know what a number is.

- Let's move on to strings.<br>
  ANYTHING THAT IS BETWEEN DOUBLE QUOTES (inverted commas) IS A STRING.
- ".............................."<br>
  This is a string.
- "abcdef"<br>
  This is also a string.

- "123"<br>
  now tell me is it a number or string?<br>
  - Of course its a string.
  - Because ANYTHING, Literally ANYTHING can be a string when it is surrounded by **" "**

## <div style="color:#EF4444">Now here is a most important thing</div>

We are humans<br>
We can figure it out whether it is a number or string.<br>
But for computer, they can't.<br>
So, inorder to tell the computer, you need to give dollar sign (**$**) after every variable names.

Examples:

```basic
LET price = "50 rupees"  ❌
LET price$ = "50 rupees" ✔️

LET monitor = "Ramesh"  ❌
LET monitor$ = "Ramesh" ✔️
```

---

## PRINTING VARIABLES

**Examples:**

1. ```basic
   LET x = 10
   PRINT x
   ```

   Output

   ```
   10
   ```

2. ```basic
   name$ = "Ram"
   PRINT name$
   ```

   Output:

   ```
   Ram
   ```

## Now Let's combine variables and normal messages

- Variables are not enclosed in quotes.
- While string are enclosed in quotes.

**Example:**

```basic
LET x = 10
PRINT "x is "; x
```

Output:

```
x is 10
```

You see?<br>

"**x is** " is a normal message **(string)**.<br>
So, its printed **as it is**<br>

But, **x** is a variable. so, it will be **replaced** by the **value of x**(which is 10).

So,

```
x is x  ❌
x is 10 ✔️
```

**Another example:**

```basic
LET name$ = "Sanjaya Acharya"
PRINT "My name is "; name$
```

What is the Output?

```
My name is name
```

Haha, Just kidding!<br>
The real Output is:

```
My name is Sanjaya Acharya
```

In the code,
"**My name is**" is surrounded by double quotes.<br>
So My name is printed **same to same**

But,<br>
**name$** is not surrounded by double quotes.<br>
So, **name$** is **replaced** by **Sanjaya Acharya**.

Therefore,

```
My name is name$          ❌
My name is Sanjaya Acharya ✔️
```

<br><br>

# Showing the multiplication table

<div style="color:#EF4444; text-align:center; font-weight:bold">
<div>This is VERY VERY IMPORTANT</div>
<div>So, note it down in your copy as well</div>
</div>
<br>

The table must look like:<br>
5 x 1 = 5<br>
5 x 2 = 10<br>

So, how to make it 🤔<br>
Don't worry! I will show you.

```basic
LET num = 5
PRINT num; " x 1 = "; num * 1
```

Here are three things in PRINT

1. **num**<br>
   Here is no double quotes<br>
   So, it is a variable<br>

   So, in screen,<br>
   **num** is replaced by it's value **(which is 5)**<br>

   So, the output is:

   ```
   5
   ```

2. "**x 1 =**"<br>
   Here is double quotes<br>
   So, it is a string<br>

   So, in screen,<br>
   The **x 1 =** is printed **same to same**<br>

   Now, the output becomes:

   ```
   5 x 1 =
   ```

3. **num \* 1**<br>
   Here is no double quotes<br>
   So, it is a variable<br>

   So, in screen,<br>
   The **value** of **num \* 1** is printed<br>
   But what is the value of **num \* 1**?<br>
   It is **5** \* **1**<br>
   Because **num** = **5**<br>

   Now, the final output becomes:

   ```
   5 x 1 = 5
   ```

   Now it looks like the table, right?.<br>
   Similarly, you can do the same for:
   5 x 2 = 10<br>
   5 x 3 = 15<br>
   5 x 4 = 20<br>
   5 x 5 = 25<br>
   5 x 6 = 30<br>
   5 x 7 = 35<br>
   5 x 8 = 40<br>
   5 x 9 = 45<br>
   5 x 10 = 50<br>

## TASK

- Write a program to print the multiplication table of 7.

```basic
CLS

LET n = 7
PRINT n; " x 1 = "; n * 1
PRINT n; " x 2 = "; n * 2
PRINT n; " x 3 = "; n * 3
PRINT n; " x 4 = "; n * 4
PRINT n; " x 5 = "; n * 5
PRINT n; " x 6 = "; n * 6
PRINT n; " x 7 = "; n * 7
PRINT n; " x 8 = "; n * 8
PRINT n; " x 9 = "; n * 9
PRINT n; " x 10 = "; n * 10

END
```

Output:

```
7  x   1  =   7
7  x   2  =  14
7  x   3  =  21
7  x   4  =  28
7  x   5  =  35
7  x   6  =  42
7  x   7  =  49
7  x   8  =  56
7  x   9  =  63
7  x  10  =  70
```
