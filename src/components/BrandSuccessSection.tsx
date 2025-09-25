import Image from "next/image";

const BrandSuccessSection = () => {
  return (
    <section
      id="success-brand"
      className="h-[610px] lg:h-[1228px] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/success_brand.jpg)" }}
    >
      <div className="container mx-auto px-4 h-full">
        {/* 왼쪽 상단 텍스트 영역 */}
        <div className="pt-8 sm:pt-12 lg:pt-20 text-left">
          <h2
            className="font-bold text-white mb-[10px] sm:mb-[15px]"
            style={{
              fontSize: "clamp(32px, 8vw, 94px)",
              lineHeight: "1em",
              color: "#fff",
            }}
          >
            전국 <span className="text-[#ea8a00]">205호점</span> 돌파
          </h2>
          <p
            className="font-semibold"
            style={{
              fontSize: "clamp(14px, 3vw, 26px)",
              lineHeight: "1.54em",
              color: "#a8a8a8",
              fontWeight: "600",
            }}
          >
            산카쿠의 가맹점주님들과 함께하는 역사는 계속됩니다.
          </p>

          {/* 브랜드 이미지 */}
          <div className="mt-4 sm:mt-6 lg:mt-8">
            <Image
              src="/images/growth.png"
              alt="산카쿠 성공 브랜드"
              width={343}
              height={252}
              className="rounded-lg shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[343px] h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* 성장 차트 */}
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 -50 1377 697"
            className="w-full h-auto"
            style={{ minHeight: "400px" }}
          >
            <path
              className="g2"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="2px"
              strokeDasharray="1, 4"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M62.031,597.499 L61.976,596.612 L220.986,586.841 L221.040,587.728 L62.031,597.499 Z"
            ></path>
            <path
              className="g3"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="2px"
              strokeDasharray="1, 4"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M218.689,587.697 L218.533,586.434 L376.186,555.206 L377.360,556.053 L218.689,587.697 Z"
            ></path>
            <path
              className="g4"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="2px"
              strokeDasharray="1, 4"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M376.180,554.615 L377.314,552.834 L530.494,502.167 L531.291,502.663 L376.180,554.615 Z"
            ></path>
            <path
              className="g5"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="1.8px"
              strokeDasharray="0.9, 3.6"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M529.993,502.522 L532.017,499.908 L687.019,432.730 L687.623,433.060 L529.993,502.522 Z"
            ></path>
            <path
              className="g6"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="1.9px"
              strokeDasharray="0.95, 3.8"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M685.961,432.920 L689.510,429.344 L841.868,355.753 L842.341,355.979 L685.961,432.920 Z"
            ></path>
            <path
              className="g7"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="1.9px"
              strokeDasharray="0.95, 3.8"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M842.358,357.018 L848.511,352.003 L1000.584,279.025 L1000.849,279.176 L842.358,357.018 Z"
            ></path>
            <path
              className="g8"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="1.9px"
              strokeDasharray="0.95, 3.8"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M999.965,278.463 L999.122,277.356 L1157.749,193.744 L1158.121,194.391 L999.965,278.463 Z"
            ></path>
            <path
              className="g9"
              fillRule="evenodd"
              stroke="rgb(168, 168, 168)"
              strokeWidth="1.9px"
              strokeDasharray="0.95, 3.8"
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="none"
              d="M1154.247,197.440 L1153.737,196.415 L1312.600,103.653 L1313.226,104.387 L1154.247,197.440 Z"
            ></path>
            <path
              className="g1"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M63.547,590.389 C67.031,590.389 69.856,593.212 69.856,596.699 C69.856,600.186 67.031,603.008 63.547,603.008 C60.062,603.008 57.237,600.186 57.237,596.699 C57.237,593.212 60.062,590.389 63.547,590.389 Z"
            ></path>
            <path
              className="g2"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M218.954,579.870 C222.439,579.870 225.264,582.695 225.264,586.182 C225.264,589.666 222.439,592.490 218.954,592.490 C215.470,592.490 212.645,589.666 212.645,586.182 C212.645,582.695 215.470,579.870 218.954,579.870 Z"
            ></path>
            <path
              className="g3"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M375.362,548.323 C378.847,548.323 381.671,551.149 381.671,554.633 C381.671,558.118 378.847,560.942 375.362,560.942 C371.877,560.942 369.053,558.118 369.053,554.633 C369.053,551.149 371.877,548.323 375.362,548.323 Z"
            ></path>
            <path
              className="g4"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M530.770,495.744 C534.254,495.744 537.079,498.570 537.079,502.057 C537.079,505.541 534.254,508.364 530.770,508.364 C527.285,508.364 524.460,505.541 524.460,502.057 C524.460,498.570 527.285,495.744 530.770,495.744 Z"
            ></path>
            <path
              className="g5"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M686.229,426.341 C689.714,426.341 692.539,429.166 692.539,432.650 C692.539,436.135 689.714,438.960 686.229,438.960 C682.744,438.960 679.920,436.135 679.920,432.650 C679.920,429.166 682.744,426.341 686.229,426.341 Z"
            ></path>
            <path
              className="g6"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M842.637,348.525 C846.122,348.525 848.946,351.348 848.946,354.833 C848.946,358.319 846.122,361.143 842.637,361.143 C839.152,361.143 836.328,358.319 836.328,354.833 C836.328,351.348 839.152,348.525 842.637,348.525 Z"
            ></path>
            <path
              className="g7"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M998.045,271.881 C1001.529,271.881 1004.354,274.705 1004.354,278.190 C1004.354,281.675 1001.529,284.503 998.045,284.503 C994.560,284.503 991.735,281.675 991.735,278.190 C991.735,274.705 994.560,271.881 998.045,271.881 Z"
            ></path>
            <path
              className="g8"
              fillRule="evenodd"
              fill="rgb(156, 95, 7)"
              d="M1154.045,188.881 C1157.529,188.881 1160.354,191.705 1160.354,195.190 C1160.354,198.675 1157.529,201.503 1154.045,201.503 C1150.560,201.503 1147.735,198.675 1147.735,195.190 C1147.735,191.705 1150.560,188.881 1154.045,188.881 Z"
            ></path>
            <path
              className="g9"
              fillRule="evenodd"
              fill="rgb(113, 252, 103)"
              d="M1309.452,97.136 C1312.982,97.136 1315.843,99.997 1315.843,103.527 C1315.843,107.056 1312.982,109.919 1309.452,109.919 C1305.923,109.919 1303.062,107.056 1303.062,103.527 C1303.062,99.997 1305.923,97.136 1309.452,97.136 Z"
            ></path>

            {/* Text Labels */}
            <text
              fontFamily="inherit"
              fontSize="24"
              fontWeight="bold"
              fill="#FFFFFF"
              x="0"
              y="643"
            >
              산카쿠 매장 수
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="43"
              y="565"
            >
              2019
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="23"
              y="535"
            >
              2호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="171"
              y="553"
            >
              2020 하반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="179"
              y="520"
            >
              3호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="330"
              y="521"
            >
              2021 상반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="329"
              y="488"
            >
              10호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="485"
              y="468"
            >
              2021 하반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="481"
              y="436"
            >
              27호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="640"
              y="395"
            >
              2022 상반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="636"
              y="362"
            >
              49호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="796"
              y="321"
            >
              2022 하반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="792"
              y="289"
            >
              89호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="951"
              y="243"
            >
              2023 상반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="941"
              y="210"
            >
              133호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#A8A8A8"
              x="1107"
              y="156"
            >
              2023 하반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#FFFFFF"
              x="1097"
              y="123"
            >
              186호점
            </text>

            <text
              fontFamily="inherit"
              fontSize="18"
              fontWeight="bold"
              fill="#FFFFFF"
              x="1263"
              y="59"
            >
              2024 상반기
            </text>
            <text
              fontFamily="inherit"
              fontSize="48"
              fontWeight="900"
              fill="#71FC67"
              x="1253"
              y="27"
            >
              205호점
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BrandSuccessSection;
