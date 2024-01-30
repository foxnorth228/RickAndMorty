# Тестовое задание Поисковик RickAndMorty

## Команды

```yarn install``` - команда установки зависимостей

```yarn run build``` - команда сборки проекта в папку public

```yarn run dev``` - команда для запуска dev сервера

```yarn run lint``` - команда для проверки синтаксиса (eslint)

```yarn run lint:fix``` - команда для проверкии исправления синтаксиса (eslint)

## Деплой

[Деплой на Netlify](https://rococo-profiterole-687e89.netlify.app/)

##  Стек

* Typescript
* React (React hooks)
* Styled-Components
* Reduxjs/toolkit
* Babel, Eslint + prettier
* Graphql (RickAndMorty Api), Apollo Client
* Webpack
* Yarn

## Файловая структура

* assets - папка с мультимедиа-контентом
* components - папка с основными компонентами
* hooks - папка с пользовательскими хуками
* layouts - папка для крупных блоков сайта, больше компонента, но меньше страницы
* pages - папка со страницами. Т.к. сайт SPA, страницей стал только App
* services - папка для работы с внешним Api
* store - папка с хранилищем Redux

## Структура компонента

* index - основной файл компонента
* styled.ts - файл с компонентами Styled-Components
* types - папка с типаи данных typescript
* config - папка с локальными статическими данными

## Именование

- Названия компонентов и их папок: PascalCase
- Компоненты Styled-components - PascalCase, первое слово всегда Styled
- Название файлов: camelCase
- Остальные переменные: camelCase
- Интерфейсы и типы данных всегда начинаются с заглавной I, PascalCase

## Остальное

Протестировано с помощью PageSpeed Insights.  
Для импортирования используются aliases.
