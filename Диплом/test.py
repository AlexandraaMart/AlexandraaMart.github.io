import tkinter as tk
from tkinter import *
from tkinter import messagebox

window = Tk() #Создаём окно приложения.
window.title("Регистрация пользователя ") #Добавляем название приложения.

window.mainloop() #добавляем, чтобы окно не закрылось
window.geometry('400x300')

frame = Frame(
   window, #Обязательный параметр, который указывает окно для размещения Frame.
   padx = 10, #Задаём отступ по горизонтали.
   pady = 10 #Задаём отступ по вертикали.
)
frame.pack(expand=True) #Не забываем позиционировать виджет в окне. Здесь используется метод pack. С помощью свойства expand=True указываем, что Frame заполняет весь контейнер, созданный для него.

family_lb = Label(
   frame,
   text="Фамилия:  "
)
family_lb.grid(row=3, column=1)

name_lb = Label(
   frame,
   text="Имя:  ",
)
name_lb.grid(row=4, column=1)

family_tf = Entry(
   frame, #Используем нашу заготовку с настроенными отступами.
)
family_tf.grid(row=3, column=2)

name_tf = Entry(
   frame, #Используем нашу заготовку с настроенными отступами.
)
name_tf.grid(row=4, column=2)







