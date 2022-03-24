import React from 'react'

export default function Nav() {
    return (
        <div className="text-center bg-white border-gray-200 px-2 sm:px-4 py-2.5 m-2 rounded dark:bg-gray-800">
            <h1 className="text-white-theme text-3xl font-bold">2022 중기중 학생회</h1>
            <p className="text-white-theme text-l pt-1">안녕하세요! 2022년 중앙기독중학교의 학생회입니다.</p>
            <div className="inline-flex">
                <button className="rounded bg-transparent font-semibold border-red-theme mt-3 mx-1 py-2 px-6 border text-red-theme dark:hover:text-white dark:hover:bg-red-theme">알아보기</button>
                <button className="rounded bg-transparent font-semibold border-blue-theme mt-3 mx-1 py-2 px-6 border text-blue-theme dark:hover:text-white dark:hover:bg-blue-theme">둘러보기</button>
            </div>
           
        </div>
    )
}