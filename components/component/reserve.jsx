import Link from "next/link"

export function Reserve() {
  return (
    (<section
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-0">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 p-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">의사 예약하기 </h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4">
            <h3 className="mb-2 text-lg font-semibold dark:text-gray-200">이종훈 원장</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.22 11:00, 수요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
                예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.22 13:00, 수요일</span>
              <Link className="text-gray-500 hover:underline flex items-center" href="#">
              예약 불가
               
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.23 12:00, 목요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.25 09:00, 금요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </li>
          <li className="py-4">
            <h3 className="mb-2 text-lg font-semibold dark:text-gray-200">김현우 원장</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.22 13:00 수요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.22 15:00 수요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.23 17:00 목요일</span>
              <Link className="text-gray-500 hover:underline flex items-center" href="#">
                예약 불가
                
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.24 17:00 금요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </li>
          <li className="py-4">
            <h3 className="mb-2 text-lg font-semibold dark:text-gray-200">이태현 원장</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.23 11:00 목요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.24 17:00 금요일</span>
              <Link className="text-blue-500 hover:underline flex items-center" href="#">
              예약하기
                <IconArrowright className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.25 11:00 토요일</span>
              <Link className="text-gray-500 hover:underline flex items-center" href="#">
              예약 불가
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">2023.11.25 17:00 토요일</span>
              <Link className="text-gray-500 hover:underline flex items-center" href="#">
              예약 불가
                
              </Link>
            </div>
          </li>
          
        </ul>
        <button
          className="mt-4 w-full h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Close
        </button>
      </div>
    </section>)
  );
}


function IconArrowright(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}
