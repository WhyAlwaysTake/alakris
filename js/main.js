
const body = Vue.createApp({
    data() {
        return {
            header: ['Products', 'Services', 'About us', 'Partners'],
            header_demo: 'Request a demo',
            header_try: 'Try now',
            header_labels: [
                ['Разработка сайтов', 'Разработка мобильных приложений', 'Решения для доставки', 'Внедрение CRM системы']
            ],
            page: true,

            center_headline: "Automate Your Way to Success",
            center: ['Marketing automization', 'Low monthly cost', 'Loyalty program'],

            bottom_headline: "our products",
            bottom_label: "We provide solutions for",
            bottom_content: [
                ['Aggregator', 'Our offer is a software package consisting of mobile applications, an administrative panel and a website, a FoodDelivery service for food delivery services.'],
                ['Restaurant chain', 'Our versatile products are targeted for restaurant chains. It will give ample of opportunities to enhance your profits by automating its functions.'],
                ['Private enterprise', 'Alakris helps to quickly process orders, assign couriers and put dishes on the stop list and turn off the establishment, send the order to the kitchen and print the invoice']
            ],
            bottom_more: 'Learn More',
            
            advantages_headline: "our apps",
            advantages_label: "Our advantages",
            advantages_content: [
                [['PUSH', 'notifications'],
                ['MULTI', 'lingual'],
                ['MULTI', 'currency'],
                ['ZONES', 'of delivery']]
            ],

            video_headline: 'our apps',
            video_label: 'Apps and websites',
            video_bottom: 'Cross-platform user friendly and easy to use apps',
            advantages_res: 'PROS',
            advantages_bottom: 'На платформе 3 языка: английский, русский, казахский. При переключении названия блюд и их описания также меняются. Есть возможность добавления новых языков, например китайского, узбекского и т.д.',
            clients_headline: 'our services',
            clients_label: 'Our clients',
            clients_content: [
                ['1.png', '2.png', '3.png', '4.png'],
                ['5.png', '6.png', '7.png', '8.png']
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

            row1:[
                ['Payments from restaurantson time', 'Automated payment systemfor restaurant participation'],
                ['Management system for restaurants', 'Make settings, change products,launch promotions yourself']
            ],
            row2:[
                ['Promo codes', 'Attract buyers with promotional codes, integrate push-notifications'],
                ['Business promotion', 'SEO optimization'],
                ['Analytics system', 'Sales reports, popular dish,paid period of use']
            ],
            row3:[
                ['Automatic client base', 'Client data is immediately entered into the electronic database without the use of paper questionnaires.'],
                ['Full control', 'Access control for users']
            ],
            
            mac_label: 'Successfully used by companies from Russia, CIS countries, USA and Europe',
            mac_button: 'Join us now',
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