import React from 'react'

const Service = () => {
    const services = [
        {
            "title":"استشارات تغذية فردية",
            "description":"جلسات استشارية مع أخصائي تغذية لوضع خطة غذائية تناسب حالتك الصحية وأهدافك"
        },
        {
            "title":"برامج إنقاص الوزن",
            "description":"برامج علمية مدروسة لخسارة الوزن بشكل صحي وآمن مع متابعة مستمرة"
        },
        {
            "title":"تغذية للحالات الصحية",
            "description":"خطط غذائية متخصصة لمرضى السكري، الضغط، القلب وغيرها من الحالات الصحية"
        },
        {
            "title":"",
            "description":"متابعة تغذوية لحالات تكيس المبايض عند النساء مع أنظمة غذائية مدروسة لتحسين الصحة والهرمونات."
        },
        {
            "title":"",
            "description":"خطط فعّالة لنقصان الوزن تساعدك على الوصول للوزن المثالي بطريقة آمنة ومستدامة."
        },
        {
            "title":"",
            "description":"برامج مخصّصة لزيادة الوزن بشكل صحي ومتوازن بعيدًا عن العشوائية."
        },

    ]
  return (
    <section className='service container'>
        <div className="top">
        <h1>خدماتنا</h1>
        <p>نقدم مجموعة متكاملة من خدمات التغذية والاستشارات الصحية</p>
            
        </div>
        <div className="content">
           {
            services.map((ele,index)=>{
                return <div className="box" key={index}>
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                </div>
            })
           }
        </div>
    </section>
  )
}

export default Service