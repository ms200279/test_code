/**
 * Footer.jsx - 페이지 하단 푸터 컴포넌트
 * 
 * 4개의 컬럼으로 구성된 링크 그리드와 저작권 정보를 표시합니다.
 * 반응형 레이아웃: 모바일 1열, 태블릿 2열, 데스크톱 4열
 */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* 어두운 배경 (bg-gray-900), 밝은 회색 텍스트 (text-gray-300) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 컨테이너: 최대 너비 제한, 가로 중앙 정렬, 반응형 패딩 및 세로 패딩 */}
        
        {/* 링크 그리드: 반응형 4컬럼 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* grid: CSS Grid 레이아웃 */}
          {/* grid-cols-1: 모바일 1열, md:grid-cols-2: 태블릿 2열, lg:grid-cols-4: 데스크톱 4열 */}
          {/* gap-8 md:gap-12: 그리드 간격 (32px / 48px) */}
          
          {/* Company 섹션 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            {/* 제목: 흰색, 18px, 세미볼드, 하단 여백 16px */}
            <ul className="space-y-2">
              {/* space-y-2: 리스트 항목 간 8px 간격 */}
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  // hover:text-white: 호버 시 흰색으로 변경
                  // transition-colors duration-200: 200ms 색상 전환
                  aria-label="About Us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Product 섹션 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Documentation"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources 섹션 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Help Center"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Community"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Support"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal 섹션 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Cookie Policy"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 정보 섹션 */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          {/* mt-12: 상단 여백 48px, pt-8: 상단 패딩 32px */}
          {/* border-t border-gray-800: 상단 경계선 (어두운 회색) */}
          {/* text-center: 텍스트 중앙 정렬 */}
          <p className="text-gray-400">
            {/* text-gray-400: 중간 회색 텍스트 */}
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            {/* 현재 연도 자동 표시 */}
          </p>
        </div>
      </div>
    </footer>
  )
}

