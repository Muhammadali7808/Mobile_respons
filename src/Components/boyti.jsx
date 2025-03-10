import React from 'react'

const Kirish = () => {
  return (
    <div className='w-[400px] py-[16px] px-[12px] bg-[#fff7da] rounded-[16px] '>
        <h3 className='text-[#333] font-[700] text-[18px] line-height-[22px] opacity-[0.9]'>Личный кабинет</h3>
        <p className='text-[#333] opacity-[0.7] text-[14px] line-height-[20px] w-[217px] mt-[5px]'>Получайте бонусы, отслеживайте заказы и делитесь мнением</p>
        <div className='mt-[15px] mb-[10px] flex gap-[10px] aitems-center'>
        <button className='text-[#333] w-[62px] border border-[#676565] bg-[#f7f7f7] rounded-[8px] px-[5px] py-[6px] opacity-[0.9] hover:bg-[#e0e0e0] hover:opacity-100 transition'>Войти</button>
        <button className='text-[#333] w-[105px] border border-[#676565] bg-[#f7f7f7] rounded-[8px] px-[5px] py-[6px] opacity-[0.9] hover:bg-[#e0e0e0] hover:opacity-100 transition'>Мои заказы</button>
        </div>
    </div>
  )
}

export default Kirish
