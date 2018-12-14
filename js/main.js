var class_image_point = [
    {
        "id": "class01",
        "Category": "看到這句話～表示我貼了 Script AI影像技術應用工程師班 (限額30人)",
        "type": "實體課程(skill導向、PBL教學)",
        "hours": "237 小時",
        "events":
        [
            {
                "title": "Python 環境設置與基本與語法",
                "basic": "--",
                "adv": "Python 入門",
            },
            {
                "title": "Python 爬蟲及資料清洗",
                "basic": "--",
                "adv": "資料分析初步:資料整理",
            },
            {
                "title": "Python 資料視覺化實戰",
                "basic": "--",
                "adv": "資料視覺化實戰",
            },
            {
                "title": "Python 進行統計分析與期中驗收",
                "basic": "統計分析",
                "adv": "統計分析實作",
            },
            {
                "title": "Python Scikit-Learn 套件進行機器學習實作(1)",
                "basic": "機器學習基本原理",
                "adv": "Python Scikit-Learn 套件進行機器學習實作(1)",
            },
            {
                "title": "Python Scikit-Learn 套件進行機器學習實作(2) (以影像為主題)",
                "basic": "機器學習於影像辨識基本原理",
                "adv": "Python Scikit-Learn 套件進行機器學習實作(2) (以為影像主題)",
            },
            {
                "title": "keras 實作 Deep learning 的 MLP 與 CNN",
                "basic": "深度學習理論入門",
                "adv": "keras 實作 Deep learning 的 MLP 與 CNN",
            },
            {
                "title": "keras 實作 Deep learning 的 RNN 與 LSTM(以影像為主題)",
                "basic": "深度學習於影像辨識演算法",
                "adv": "keras 實作 Deep learning 的 RNN 與 LSTM(以影像為主題)",
            },
            {
                "title": "keras 實作 Deep learning 進階運用(以影像為主題)",
                "basic": "--",
                "adv": "Deep learning 在影像辨識的進階運用",
            },
            {
                "title": "Deep Learning 在雲端工具的運用(以影像為主題)",
                "basic": "雲端系統原理",
                "adv": "AI在雲端工具的運用",
            },
            {
                "title": "專題實作(4週)",
                "basic": "--",
                "adv": "專題實作",
            },
        ]
    },
    {
        "id": "class02",
        "Category": "AI文字技術應用工程師班 (限額30人)",
        "type": "實體課程(skill導向、PBL教學)",
        "hours": "237 小時",
        "events":
        [
            {
                "title": "Python 環境設置與基本與語法",
                "basic": "--",
                "adv": "Python 入門",
            },
            {
                "title": "Python 爬蟲及資料清洗",
                "basic": "--",
                "adv": "資料分析初步:資料整理",
            },
            {
                "title": "Python 資料視覺化實戰",
                "basic": "--",
                "adv": "資料視覺化實戰",
            },
            {
                "title": "Python 進行統計分析與期中驗收",
                "basic": "統計分析",
                "adv": "統計分析實作",
            },
            {
                "title": "Python Scikit-Learn 套件進行機器學習實作(1)",
                "basic": "機器學習基本原理",
                "adv": "Python Scikit-Learn 套件進行機器學習實作(1)",
            },
            {
                "title": "Python Scikit-Learn 套件進行機器學習實作(2) (以文句辨識為主題)",
                "basic": "機器學習於文句辨識基本原理",
                "adv": "Python Scikit-Learn 套件進行機器學習實作(2) (以為文句辨識主題)",
            },
            {
                "title": "Keras 實作 Deep learning 的 MLP 與 CNN",
                "basic": "深度學習理論入門",
                "adv": "keras 實作 Deep learning 的 MLP 與 CNN",
            },
            {
                "title": "Keras 實作 Deep learning的 RNN 與 LSTM(以專題為主題)",
                "basic": "深度學習於文句辨識演算法",
                "adv": "Keras 實作 Deep learning 的 RNN 與 LSTM(以文句辨識為主題)",
            },
            {
                "title": "Keras 實作 Deep learning 進階運用(以專題為主題)",
                "basic": "--",
                "adv": "Deep learning 在文句辨識進階運用",
            },
            {
                "title": "Deep Learning 在雲端工具的運用(以專題為主題)",
                "basic": "雲端系統原理",
                "adv": "AI 在雲端工具的運用",
            },
            {
                "title": "專題實作(4週)",
                "basic": "--",
                "adv": "專題實作",
            },
        ]
    }
];

var online = [
    {
        "Category": "AI文字技術應用工程師班 (限額30人)",
        "events":
        [
            {
                "title": "Python 基礎、MySqL、NoSQL 資料庫",
            },
            {
                "title": "Python 爬蟲技巧",
            },
            {
                "title": "Python 視覺化程式",
            },
            {
                "title": "Python 統計分析",
            },
        ]
    }
];




// ======================== 以下勿更改 ========================

function checkpage () {
    
    setTimeout(function () {
        if ($('#annual').is(':visible')) {

            
            // slides plugin - Swiper
            function SwiperRun() {
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: false,
                    slidesPerView : 'auto',
                    loopedSlides: 9,
                    spaceBetween: 0,
                    // autoplayDisableOnInteraction: false,
                    // 如果需要前进后退按钮
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    }
                });
            }
            
            var app = new Vue({
                el: "#annual",
                data: {
                    class_image_point: class_image_point,
                    online: online,
                    // 活動數值定義
                    event_infor: {
                        class_name : "ai-engineer",
                        class_title: "107年建置「AI人工智慧產業專業人才發展基地」計畫",
                        pdf: '台北市中正區中山南路11號，近捷運台大醫院站',
                        signURL: 'https://www.tibame.com/course/409'
                    },
                    modalstatus: false,
                    modalstatus2: false,
                    modalInfor : {}

                },
                methods: {
                    modalOpen : function (modal) {
                        // var $popup = document.getElementById('annual').getElementsByClassName('wrap')[0];
                        // var $popup = $('.popup-area');
                        // $('.popup-area')
                            if(modal == 'member') {
                                this.modalstatus = !this.modalstatus;
                            } else if(modal == 'rules') {
                                this.modalstatus2 = !this.modalstatus2;
                            } 
                    },
                    modalClose : function (modal) {
                        if(modal == 'member') {
                            this.modalstatus = !this.modalstatus;
                        } else if(modal == 'rules') {
                            this.modalstatus2 = !this.modalstatus2;
                        } 
                    },
                    //點按後滑動至指定 ID
                    scrollMove : function (name) {
                        var $goal = $(`#${name}`).offset().top;
                        $('html,body').animate({scrollTop: $goal}, 400);
                    },
                    //開啟 outlook
                    sendEmail () {
                        window.open("mailto:?subject=跟你分享這一門課："+ this.event_infor.class_title +"&body=網址如下：https://www.tibame.com/goodjob/"+this.event_infor.class_name);
                        
                    }
                },
                // 資料匯入後才開始執行
                mounted: function () {
                    var $solid_white = $('.solid-white');
                    $solid_white.addClass('active');
                    setTimeout(function () { $solid_white.remove(); } , 1200);
                    SwiperRun();// slides plugin

                    // 每次瀏覽器尺寸變更，會重新執行一次 function
                    // window.onresize = function temp() {
                    //     // 
                    // };
                    
                }
            });

        } else {
            setTimeout(checkpage, 100); //wait 100 ms, then try again
        }
    }, 500)
}


$(function () {
    checkpage();
})
