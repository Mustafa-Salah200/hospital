import React from 'react'

const Testimonials = () => {
    const customer = [
        {
            "id":1,
            "description":"ابشرش  فستان العيد وصل وطلع مقاسي وعاده واسع شوي 😂😭😭"
        },
        {
            "id":2,
            "description":"يمكن قبل كنت اتمرن والاكل ماركزت عليه عشان كذا مالقيت فايده مع ان قد كان لي شهررر اتمرن تمارين بطن ونص ساعه ماهو بس عشر دقايق مصدومه"
        },
        {
            "id":3,
            "description":"ياقلبي تسلمي لي والله، بفضل الله وفضلش الحمدلله انحلّت عقدة كبيرة كانت بحياتي"
        },
        {
            "id":4,
            "description":"حاسه حالي كتير متغيره حتى رفيقتي حكتلي متغيره كتله جسمك كامل"
        },
        {
            "id":5,
            "description":"حاسه حالي كتير متغيره حتى رفيقتي حكتلي متغيره كتله جسمك كامل"
        },
    ]
  return (
    <section className='testimonials container'>
        <div className="top">
            <h1>آراء عملائنا</h1>
            <p>قصص نجاح وتجارب حقيقية من عملائنا الكرام</p>
        </div>
        <div className="content">
            {
                customer.map((ele,index)=>{
                    return <div key={index} className="box">
                        <p>"{ele.description}"</p>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Testimonials