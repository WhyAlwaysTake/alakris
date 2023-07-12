
const body = Vue.createApp({
    data() {
        return {
            header: ['Продукты', 'Сервисы', 'О нас', 'Партнеры'],
            header_demo: 'Запросить демо',
            header_try: 'Попробовать',
            header_labels: [
                ['Разработка сайтов', 'Разработка мобильных приложений', 'Решения для доставки', 'Внедрение CRM системы']
            ],
            page: true,

            center_headline: "Приложения с бонусами и доставкой",
            center: 'Вы видите данные о клиенте в своем личном кабинете, а клиент видит все новости Вашего бизнеса в приложении',

            bottom_headline: "our products",
            bottom_label: "We provide solutions for",
            bottom_contents: [
                [
                    ['Программа лояльности', 'это программа позволяющее покупателям накапливать бонусы и получать скидки'],
                    ['Интернет-магазин', 'Настройка Вашего WEB-сайта на платформе занимает 1,5 часа'],
                    ['QR меню', 'Чтобы сделать что-то достаточно мобильном приложении']
                ],
                [
                    ['Promo codes', 'Attract buyers with promotional codes, integrate push-notifications'],
                    ['Business promotion', 'SEO optimization'],
                    ['Analytics system', 'Sales reports, popular dish,paid period of use']
                ],
                [
                    ['Promo codes', 'Attract buyers with promotional codes, integrate push-notifications'],
                    ['Business promotion', 'SEO optimization'],
                    ['Analytics system', 'Sales reports, popular dish,paid period of use']
                ]
            ],
            bottom_more: 'Learn More',

            clients_headline: 'our services',
            clients_label: 'Our clients',
            clients_content: [
                ['1.png', '2.png', '3.png'],
                ['4.png', '5.png', '6.png']
            ],
            
            footer_content: [
                ['Services', ['Website promotion', 'SMM promotion', 'Website development', 'Mobile development', 'Website hosting']],
                ['Solution', ['Internet ads', 'CRM Integration', 'Marketing', 'Delivery solutions']],                
                ['About us', ['Partnership program', 'Blog', 'Representative offices', 'Vacancies']],
                ['Contact us', ['+7 (705) 212-20-51', 'alakriskz@gmail.com', 'Kazakhstan, Almaty,', 'str. Khodzhanova 2/2']],
            ],
            footer_bottom:['© 2023 LLC "ALAKRIS GROUP" All rights reserved', 'BIN 220440055244'],

            top_headline: 'Explore your borders',
            top: 'Embrace guests with modern low-cost IT solutions - take online orders, enable online table booking service',
            top_demo: 'Request a demo',

            mac_label: 'SPEAK WITH OUR EXPERTS ABOUT YOUR BUSINESS GROW',
            mac_button: 'Join us now',

            tarifs_headline: 'тарифы',
            tarifs_label1: 'Тарифы на CRM + сайт + Android и IOS приложение под Вашим брендом',
            tarifs_label2: 'Тарифы на CRM + сайт под Вашим брендом',
            tarifs_content: 
            [
                ['6', 'месяцев', '', '280,000 тг'],
                ['9', 'месяцев', '+1 месяцeв подарок', '370,000 тг'],
                ['12', 'месяцев', '+2 месяцeв подарок', '470,000 тг'],
                ['24', 'месяцев', '+6 месяцeв подарок', '850,000 тг'],
            ],
            tarifs_content2: 
            [
                ['6', 'месяцев', '', '75,000 тг'],
                ['9', 'месяцев', '+1 месяцeв подарок', '100,000 тг'],
                ['12', 'месяцев', '+2 месяцeв подарок', '125,000 тг'],
                ['24', 'месяцев', '+6 месяцeв подарок', '225,000 тг'],
            ],
            tarifs_buy: 'Купить',


            bottom2_headline: "aggregator",
            bottom2_label: "WHAT IS INCLUDED?",
            bottom2_content: [
                'Пользовательское приложение на платформе Android и IOS',
                'Приложение для администратора ресторана, для редактирования меню и приём заказов',
                'Приложение курьера'
            ],
            bottom2_content2: [
                'Индивидуальное оформление под ваш фирменный стиль',
                'Публикация в AppStore, Google Play под вашим брендом',
                'Предоставление сервера и круглосуточное администрирование'
            ],

            questions_headline: 'FAQ',
            questions_label: 'FREQUENTLY ASKED QUESTIONS',
            openedQ: 0,
            questions_content: [
                ['Можно ли купить приложения в собственность или в рассрочку?', 'Да можно, стоимость приобретения бессрочной лицензии 295 000 руб на весь программный комплекс, рассрочка возможна на 6 месяцев, равными платежами.'],
                ['Можно ли заказать доработку программы?', ''],
                ['Как давно вы этим занимаетесь?', ''],
                ['Можно ли заказать разработку сайта по доставке с индивидуальным дизайном? И сколько это стоит?', ''],
                ['Сколько стоит продвижение приложений?', '']
            ]
        }
    },
    methods: {
        changePage(input){
            this.page = input;
        },
        getHeaderLanStyle(lan){
            if(this.header_lan_active != lan){
                return("font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', bold; font-size: 12px; color: black;")
            }
            else{
                return("font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', bold; font-size: 12px; color: grey; text-decoration: underline;")
            }
        },
        changeLan(lan){
            this.header_lan_active = lan;
        },
        openQuestion(inp){
            if(this.openedQ != inp){
                this.openedQ = inp;
            }
            else{
                this.openedQ = null;
            }
        }
    }
}).mount('#body')