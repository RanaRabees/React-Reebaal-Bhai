/* eslint-disable @next/next/no-img-element */
import React from 'react'
const profile = 'https://lh3.googleusercontent.com/dBmDV0m69m5sHYXCd90JWPGb-fAEWgOYMA0WNtqUVj9AloPQVtH-m7QE7LTz6bWAlu-xRXvO7jUQ7XjZBbcZN6z1BUex8pz9OLx-5VWKcwRGQKX72iurAA6lMFPdv4E2KHEM_NKk9kUmGR5qnz50ZfLRfNBdWQSRu3a7MG_fseprSxFfaAsEssyO7sKcj3pVw9RUXbL7nkXC-3-rTcXydH-wy2KGmzrSV9Oa4YfeD6BPEr9RbnoscnSONGF8_LlVaeci6h0WvkQ1bKdmmy27ItMH1zVWxk8DrBGzQDfJAUlv_HaUZZ9AWkyjuYKZ6ph11BjmLuBH0YBuzNP9r5zWMucwC8mrLZx8wxCVsU6UKmL3q5KBKWqI6wEMzu1VS1MYTeWcd4yNlL2PCOMTyDdH-9sqPENjmIvMRmsOtG0-fM1yJnpsHuh62Cb6tjvAy7JIJll0xXaFA8_jCFV16q44o11kNHdjvCyv8UFBBjiXVIWVHz6DzOdIhwhzBATa07kWgeKL3YP8W6jz5GmBV_MFZ7pFOjpSGVYzCj0fdE_b1DdOyTH_Tm_68FDkshFzzBIYwVO-Gu32UUgxdNm9L9fc9gEvVu-yF1f5LWKpF89oyKceS-OgEEdmuX8eYODh0s9LZ9dHtAoNEXo9vVFASd5JAQCHu2D9p5xW1h2tkYV92bOTyTaYp5Cq58v2ddbQBoOvXUF23W5lrKUP8vk-oOaTyaYK7iwJKlC0MLWVDT6Zc9acI4WI9KLJv0YS9OOKsyAIbiwhgzyCkA_Q_Dowwk__MA6YpJOiZNCgWqxjPy-p4XkysCNwI0QQvkG_wceUg3vdHqj9LxjVN33jxNCF1d0CiDNSzGa3Oeeor_rK-leitwD4Dr-4Iqh1H_pbnEAC6_07ravZpHUC76rEL6_pCLnZmyfETYeLWafRPph5KnsTsgPA=w284-h279-s-no?authuser=0';
const description = 'Rabees Hussain';

const person = {
    name: 'Rana Rabees',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function Third() {
    return (
        <>
            <div style={person.theme}>
                <br />
                <h1 className='text-4xl justify-center text-center text-lime-500'>I am {person.name}</h1>
                <br />
                <div className='flex justify-center'>
                    <img
                        className="rounded-full w-60 h-60"
                        src="https://lh3.googleusercontent.com/dBmDV0m69m5sHYXCd90JWPGb-fAEWgOYMA0WNtqUVj9AloPQVtH-m7QE7LTz6bWAlu-xRXvO7jUQ7XjZBbcZN6z1BUex8pz9OLx-5VWKcwRGQKX72iurAA6lMFPdv4E2KHEM_NKk9kUmGR5qnz50ZfLRfNBdWQSRu3a7MG_fseprSxFfaAsEssyO7sKcj3pVw9RUXbL7nkXC-3-rTcXydH-wy2KGmzrSV9Oa4YfeD6BPEr9RbnoscnSONGF8_LlVaeci6h0WvkQ1bKdmmy27ItMH1zVWxk8DrBGzQDfJAUlv_HaUZZ9AWkyjuYKZ6ph11BjmLuBH0YBuzNP9r5zWMucwC8mrLZx8wxCVsU6UKmL3q5KBKWqI6wEMzu1VS1MYTeWcd4yNlL2PCOMTyDdH-9sqPENjmIvMRmsOtG0-fM1yJnpsHuh62Cb6tjvAy7JIJll0xXaFA8_jCFV16q44o11kNHdjvCyv8UFBBjiXVIWVHz6DzOdIhwhzBATa07kWgeKL3YP8W6jz5GmBV_MFZ7pFOjpSGVYzCj0fdE_b1DdOyTH_Tm_68FDkshFzzBIYwVO-Gu32UUgxdNm9L9fc9gEvVu-yF1f5LWKpF89oyKceS-OgEEdmuX8eYODh0s9LZ9dHtAoNEXo9vVFASd5JAQCHu2D9p5xW1h2tkYV92bOTyTaYp5Cq58v2ddbQBoOvXUF23W5lrKUP8vk-oOaTyaYK7iwJKlC0MLWVDT6Zc9acI4WI9KLJv0YS9OOKsyAIbiwhgzyCkA_Q_Dowwk__MA6YpJOiZNCgWqxjPy-p4XkysCNwI0QQvkG_wceUg3vdHqj9LxjVN33jxNCF1d0CiDNSzGa3Oeeor_rK-leitwD4Dr-4Iqh1H_pbnEAC6_07ravZpHUC76rEL6_pCLnZmyfETYeLWafRPph5KnsTsgPA=w284-h279-s-no?authuser=0"
                        alt="Rabees Hussain"
                    />
                    <img
                        className="rounded-full w-60 h-60"
                        src={profile}
                        alt=""
                        title={description}
                    />
                </div>
                <br />
            </div >
        </>
    );
}







