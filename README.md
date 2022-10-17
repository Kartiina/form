# Feedback form

### Создание формы обратной обратной связи ###
Проект был написан в процессе изучения языка JavaScript. 
Для реализации данной идеи было использовано: HTML, CSS, Google Sheets, собственный макет Figma и JS.
##
![First Screen](https://github.com/Kartiina/form/blob/master/screenshots/first.png "Correct fill")
> Правильность заполнения первой графы заключается в недопустимости цифры в имени/фамилии и пробелов:
```js
data-reg="^([a-zA-Z]+)\s*\s*([a-zA-Z]+)$|^([а-яёА-ЯЁ]+)\s*\s*([а-яёА-ЯЁ]+)$"
```
> Номер телефона и почта также имеют свои правила заполенения:
```js
data-reg_phone = "^((\+7|7|8)+([0-9]){10})$"
data-reg_mail = "^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
```
#
В случае неправильного заполнения формы, легко понять что именно было заполнено не верно:<br /><br />
![2nd Screen](https://github.com/Kartiina/form/blob/master/screenshots/wrong.png "Wrong fill")
>Если что-то было введено не верно форма не отправится, пока не будут исправлены соответствующие ошибки
#
<br />
Таким образом выглядит адаптация к маленькому размеру экрана:<br /><br />
<p align="center">
  <img src="https://github.com/Kartiina/form/blob/master/screenshots/small.png" width="600" height="550" />
</p>
#
После отправки формы все данные отправляются в заранее созданную и подключенную гугл-таблицу:<br /><br />
<p align="center">
  <img src="https://github.com/Kartiina/form/blob/master/screenshots/table.png" width="600" height="550" />
</p>

## tnx for your attention!👻

**@3d.karttina**
