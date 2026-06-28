import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './DuckChiDetail.module.css'
import DetailContainer from '../components/DetailContainer'

export default function DuckChiDetail() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.page}>
      <div className={`${styles.topBar} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.back} onClick={() => navigate('/projects')}>
          ← 프로젝트 목록
        </button>
        <span className={styles.label}>
          <img src="/duckchi_character.png" alt="DuckChi" style={{ width: '2.4rem', height: '2.4rem', objectFit: 'contain', verticalAlign: 'middle', marginRight: '6px' }} />
          DuckChi (덕치)
        </span>
      </div>

      <div className={styles.content}>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet" />

        <DetailContainer>

          {/* Hero */}
          <div className={styles.hero}>
            <div className={styles.heroLogo}>
              <img src="/duckchi_character.png" alt="DuckChi 캐릭터" />
            </div>
          </div>
          <div className={styles.heroCard}>
            <h1 className={styles.appName}>DuckChi (덕치)</h1>
            <p className={styles.subtitle}>SSAFY 금융 API 기반 모임 지출 관리 & 정산 핀테크 앱</p>
          </div>

          {/* 프로젝트 개요 */}
          <section className={styles.section}>
            <h2>프로젝트 개요</h2>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>프로젝트명</span>
              <span className={styles.overviewValue}>DuckChi (덕치)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>개발 기간</span>
              <span className={styles.overviewValue}>2026.02 ~ 2026.03</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>팀 구성</span>
              <span className={styles.overviewValue}>6명 (Full-Stack 6)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>담당 역할</span>
              <span className={styles.overviewValue}>Full-Stack (FE 리더 · BE 참여)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>분류</span>
              <span className={styles.overviewValue}>SSAFY 14기 자율 프로젝트 (핀테크/금융)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>GitHub</span>
              <span className={styles.overviewValue}><a href="https://github.com/sooyeoni2/duckchi" target="_blank" rel="noopener noreferrer">DuckChi 보러가기</a></span>
            </div>
          </section>

          {/* 기획 배경 */}
          <section className={styles.section}>
            <h2>기획 배경</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              <div style={{ background: 'var(--primary-20)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4em', fontWeight: '800', color: 'var(--primary-100)' }}>3명 중 2명</div>
                <div style={{ fontSize: '0.75em', color: 'var(--text-secondary)', marginTop: '4px' }}>모임 정산 경험 있음</div>
              </div>
              <div style={{ background: 'var(--primary-20)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4em', fontWeight: '800', color: 'var(--primary-100)' }}>평균 3일</div>
                <div style={{ fontSize: '0.75em', color: 'var(--text-secondary)', marginTop: '4px' }}>정산 완료까지 걸리는 시간</div>
              </div>
              <div style={{ background: 'var(--primary-20)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4em', fontWeight: '800', color: 'var(--primary-100)' }}>카드 · 현금 혼재</div>
                <div style={{ fontSize: '0.75em', color: 'var(--text-secondary)', marginTop: '4px' }}>지출 기록이 흩어지는 원인</div>
              </div>
            </div>

            <div className={styles.highlightBanner}>
              <p>
                모임·여행·식사 후 비용을 나눌 때 카드·현금 지출이 <span className={styles.em}>여러 곳에 흩어져</span> 있고,<br />
                영수증을 직접 입력하거나 카카오페이 등 <span className={styles.em}>별도 앱을 오가는</span> 번거로움이 있었습니다.
              </p>
            </div>

            <p style={{ fontSize: '0.92em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '16px' }}>
              DuckChi는 <strong style={{ color: 'var(--primary-100)' }}>SSAFY 금융 API</strong>를 연동해 실제 계좌를 앱 안에서 관리하고,
              OCR로 영수증을 자동 인식해 지출을 기록하며, 모임방을 통해 그룹 내 지출 내역을 실시간으로 공유하고
              정산까지 한 번에 처리할 수 있는 <strong style={{ color: 'var(--primary-100)' }}>올인원 금융 관리 앱</strong>으로 기획되었습니다.
            </p>
          </section>

          {/* 기술 스택 */}
          <section className={styles.section}>
            <h2>기술 스택</h2>

            <div className={styles.techSectionTitle}>Frontend (Mobile)</div>
            <div className={styles.techTags}>
              <span className={styles.techTag}>React Native</span>
              <span className={styles.techTag}>TypeScript</span>
              <span className={styles.techTag}>Expo</span>
              <span className={styles.techTag}>Zustand</span>
              <span className={styles.techTag}>Axios</span>
              <span className={styles.techTag}>React Navigation</span>
              <span className={styles.techTag}>Zod</span>
              <span className={styles.techTag}>Firebase FCM</span>
              <span className={styles.techTag}>Notifee</span>
            </div>

            <div className={styles.techSectionTitle}>Backend (MSA)</div>
            <div className={styles.techTags}>
              <span className={`${styles.techTag} ${styles.backend}`}>Java 17</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Spring Boot</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Spring Cloud</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Eureka</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Kafka</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Redis</span>
              <span className={`${styles.techTag} ${styles.backend}`}>JWT</span>
              <span className={`${styles.techTag} ${styles.backend}`}>JPA</span>
              <span className={`${styles.techTag} ${styles.backend}`}>MySQL</span>
            </div>

            <div className={styles.techSectionTitle}>Infrastructure & External API</div>
            <div className={styles.techTags}>
              <span className={`${styles.techTag} ${styles.infra}`}>AWS EC2</span>
              <span className={`${styles.techTag} ${styles.infra}`}>AWS RDS</span>
              <span className={`${styles.techTag} ${styles.infra}`}>AWS S3</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Jenkins</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Docker</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Prometheus</span>
              <span className={`${styles.techTag} ${styles.infra}`}>SSAFY 금융 API</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Naver Clova OCR</span>
            </div>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2>주요 기능</h2>
            <div className={styles.featureListWrap}>
              <div className={styles.featureList}>
                {[
                  { title: '카카오 로그인', desc: 'OAuth WebView 방식, 프로필 초기 설정' },
                  { title: '모임방', desc: '그룹 공동 지출 관리 및 실시간 정산' },
                  { title: '계좌 연동', desc: 'SSAFY 금융 API 계좌 등록·조회·삭제' },
                  { title: '소비 리포트', desc: 'OCR 영수증 인식 + 카테고리별 소비 분석' },
                  { title: '개인 결제', desc: '결제 등록·이력 조회, 계좌 이체' },
                  { title: '뱃지 / 랭킹', desc: '지출 패턴 기반 뱃지 획득, 모임 내 랭킹' },
                  { title: 'FCM 알림', desc: '정산 요청·뱃지 획득·초대 링크 푸시 알림' },
                ].map(({ title, desc }, i) => (
                  <div key={title} className={styles.featureListItem}>
                    <span className={styles.featureNum}>{String(i + 1).padStart(2, '0')}</span>
                    <div className={styles.featureListText}>
                      <span className={styles.featureListTitle}>{title}</span>
                      <span className={styles.featureListDesc}>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flexShrink: 0, marginRight: '242px' }}>
                <img
                  src="/duckchi_screen.gif"
                  alt="DuckChi 앱 화면"
                  style={{ width: '210px', borderRadius: '16px', border: '1px solid var(--gray-5)' }}
                />
              </div>
            </div>
          </section>

          {/* 담당 기능 상세 */}
          <section className={styles.section}>
            <h2>담당 기능 <span className={styles.badge}>5개</span></h2>

            {/* 1. 공용 컴포넌트 & 프로젝트 초기 구조 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>공용 컴포넌트 & 프로젝트 초기 구조</div>
                  <div className={styles.featureSubtitle}>Shared Components · Feature-First MVVM 구조 설계</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>Feature-First MVVM 구조 설계 및 fe_docs 문서화 (폴더 구조, 네이밍 가이드)</li>
                <li>Toast 알림 시스템 — 글로벌 Provider로 어디서든 1줄 호출</li>
                <li>LoadingIndicator / ErrorView / EmptyView 공통 피드백 컴포넌트</li>
              </ul>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>초기 도입 배경</div>
                <ul>
                  <li>개발 초기 구조 합의 없이 시작하면 PR마다 패턴 논쟁이 생겨 기능 개발이 지연됨 → fe_docs로 먼저 합의해 구조 관련 코멘트 없이 기능에 집중</li>
                  <li>공용 컴포넌트 shared/ 분리 → 디자인 변경 시 한 파일만 수정으로 전체 반영</li>
                  <li>정적 Alert 대신 Toast Provider → 블로킹 UX 제거, 어디서든 코드 1줄로 호출</li>
                </ul>
              </div>
            </div>

            {/* 2. 계좌 연동 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>계좌 연동</div>
                  <div className={styles.featureSubtitle}>SSAFY 금융 API · 계좌 등록 / 조회 / 삭제 · 결제 비밀번호</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>SSAFY 금융 API 연동 — 계좌 목록 조회, 잔액 조회, 1원 인증</li>
                <li>결제 비밀번호 설정 / 변경 및 이체 한도 설정</li>
                <li>Zustand lockedBanksStore — 인증 실패 시 bankCode 24시간 잠금</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>계좌 등록 화면 진입 → 은행 선택</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>계좌번호 입력 → SSAFY 금융 API 계좌 검증</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>1원 인증 → 입금 확인 코드 입력</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div></div>
                  <div className={styles.flowText}>계좌 등록 완료 → 프로필 대표 계좌 반영</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 포인트</div>
                <ul>
                  <li>계좌 API URL 경로 오타로 인한 404 에러 → baseURL과 endpoint 분리 검토 후 수정</li>
                  <li>은행 아이콘 autolinking 패키지명 불일치 → react-native.config.js 경로 정정</li>
                </ul>
              </div>
            </div>

            {/* 3. 뱃지 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>뱃지 시스템</div>
                  <div className={styles.featureSubtitle}>뱃지 목록 · FCM 알림 · 자동 갱신 · BE 도메인 설계</div>
                </div>
              </div>

              <div className={styles.featureLabel}>BE 구현</div>
              <ul>
                <li>Badge / BadgeProgress / UserBadge 엔티티 설계 및 Repository 구현</li>
                <li>BadgeServiceImpl — 뱃지 획득 조건 판별 · 진행도 업데이트 로직</li>
              </ul>

              <div className={styles.featureLabel}>FE 구현</div>
              <ul>
                <li>뱃지 전체보기 화면 (획득 / 미획득 목록)</li>
                <li>FCM 알림 수신 시 Zustand 스토어 idle 초기화 → 자동 재조회</li>
              </ul>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 포인트</div>
                <ul>
                  <li>뱃지 목록 FlatList에서 중복 key 에러 발생 → id 기반 keyExtractor로 수정</li>
                  <li>FCM 알림과 Zustand 스토어 연동 → 앱 재시작 없이 즉시 반영</li>
                </ul>
              </div>
            </div>

            {/* 4. 프로필 관리 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>프로필 관리</div>
                  <div className={styles.featureSubtitle}>프로필 조회·수정 · 설정 · BE API 설계</div>
                </div>
              </div>

              <div className={styles.featureLabel}>BE 구현</div>
              <ul>
                <li>UserProfileController — 프로필 조회 / 수정 / 이미지 수정 엔드포인트</li>
                <li>UserProfileServiceImpl — 프로필 상세 조회 (뱃지 포함) · 수정 로직</li>
                <li>UserProfileDetailResponse / UserProfileBadgeResponse 등 DTO 설계</li>
              </ul>

              <div className={styles.featureLabel}>FE 구현</div>
              <ul>
                <li>data / domain / presentation 전 레이어 구현 (MVVM)</li>
                <li>프로필 이미지 S3 업로드 및 닉네임 수정</li>
                <li>설정 화면 — 결제 비밀번호 변경, 이체 한도, 로그아웃 연결</li>
              </ul>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 포인트</div>
                <ul>
                  <li>공용 DeleteConfirmModal 컴포넌트 분리 → 대표 계좌 외 다른 삭제 동작에도 재사용</li>
                </ul>
              </div>
            </div>

            {/* 4. 로그인 / 온보딩 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>로그인 / 온보딩</div>
                  <div className={styles.featureSubtitle}>카카오 OAuth · 프로필 초기 설정 · 이용약관</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>WebView 기반 카카오 OAuth 2.0 로그인</li>
                <li>로그인 model / viewmodel 전체 레이어 구현 (MVVM)</li>
                <li>신규 / 기존 유저 분기 → 온보딩 또는 메인 화면 이동</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>카카오 로그인 버튼 클릭 → WebView OAuth 화면 표시</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>OAuth 콜백 수신 → 서버 토큰 교환 → AsyncStorage 저장</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>신규 유저 → 이용약관 동의 → 프로필 초기 설정</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div></div>
                  <div className={styles.flowText}>기존 유저 → 메인 홈 화면</div>
                </div>
              </div>
            </div>
          </section>

          {/* 트러블슈팅 */}
          <section className={styles.section}>
            <h2>트러블슈팅 <span className={styles.badge}>4건</span></h2>

            {/* 1. 결제 목록 무한루프 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>결제</span>
                <span className={styles.troubleTitle}>결제 목록 무한 리렌더링 — useMemo 미적용</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>결제 목록 화면 진입 시 앱이 응답 없이 멈추는 현상. filteredExpenses와 summary가 렌더마다 새 배열/객체를 반환하면서 상태 변경 → 리렌더 → 상태 변경의 무한루프 발생</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>인라인으로 선언된 파생값이 렌더마다 새 참조를 생성해 의존하는 컴포넌트가 계속 재렌더됨</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>React.useMemo로 메모이제이션 → state가 실제로 변경될 때만 재계산</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>파생 상태는 인라인 선언이 아닌 useMemo로 감싸야 불필요한 참조 변경을 막을 수 있음</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{'// 렌더마다 새 배열/객체 생성 → 무한루프'}</span>{'\n'}
                      <span className={styles.kw}>{'const'}</span>{' filteredExpenses =\n  expenses.'}
                      <span className={styles.fn}>{'filter'}</span>{'(e =>\n    e.category === selected);\n\n'}
                      <span className={styles.kw}>{'const'}</span>{' summary =\n  filteredExpenses.'}
                      <span className={styles.fn}>{'reduce'}</span>{'(\n    (acc, e) => acc + e.amount, 0);'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// 의존값 변경 시에만 재계산'}</span>{'\n'}
                      <span className={styles.kw}>{'const'}</span>{' filteredExpenses =\n  '}
                      <span className={styles.fn}>{'useMemo'}</span>{'(() =>\n    expenses.'}
                      <span className={styles.fn}>{'filter'}</span>{'(e =>\n      e.category === selected),\n  [expenses, selected]);\n\n'}
                      <span className={styles.kw}>{'const'}</span>{' summary =\n  '}
                      <span className={styles.fn}>{'useMemo'}</span>{'(() =>\n    filteredExpenses.'}
                      <span className={styles.fn}>{'reduce'}</span>{'(\n      (acc, e) => acc + e.amount, 0),\n  [filteredExpenses]);'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 계좌 API URL 오타 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>계좌</span>
                <span className={styles.troubleTitle}>계좌 등록 · 1원 인증 API 404 에러 — URL 경로 오타</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>계좌 등록 및 1원 인증 API 호출 시 404 응답이 반환되며 계좌 연동 플로우가 진행되지 않음</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>엔드포인트에 /auth가 잘못 포함됨 (/api/v1/auth/bank-accounts → /api/v1/bank-accounts)</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>백엔드 라우팅 문서를 재확인해 경로 정정, 등록·인증 두 엔드포인트 모두 수정</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>API 연동 초기에 baseURL과 endpoint 경로를 명확히 분리해 정의하면 경로 오타를 사전에 방지할 수 있음</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{'// /auth 경로가 잘못 포함됨'}</span>{'\n'}
                      <span className={styles.kw}>{'const'}</span>{' registerBank =\n  axios.'}
                      <span className={styles.fn}>{'post'}</span>{'(\n    '}
                      <span className={styles.str}>{`'/api/v1/auth/bank-accounts'`}</span>{',\n    body);\n\n'}
                      <span className={styles.kw}>{'const'}</span>{' verify1won =\n  axios.'}
                      <span className={styles.fn}>{'post'}</span>{'(\n    '}
                      <span className={styles.str}>{`'/api/v1/auth/bank-accounts/verify'`}</span>{',\n    body);'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// /auth 제거 후 정상 라우팅'}</span>{'\n'}
                      <span className={styles.kw}>{'const'}</span>{' registerBank =\n  axios.'}
                      <span className={styles.fn}>{'post'}</span>{'(\n    '}
                      <span className={styles.str}>{`'/api/v1/bank-accounts'`}</span>{',\n    body);\n\n'}
                      <span className={styles.kw}>{'const'}</span>{' verify1won =\n  axios.'}
                      <span className={styles.fn}>{'post'}</span>{'(\n    '}
                      <span className={styles.str}>{`'/api/v1/bank-accounts/verify'`}</span>{',\n    body);'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 1원 인증 실패 후 은행 잠금 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>계좌</span>
                <span className={styles.troubleTitle}>1원 인증 실패 후 동일 은행 무한 재시도 가능 — 24시간 잠금 처리</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>1원 인증 코드 입력 실패 시 동일 은행으로 즉시 재시도 가능. 금융 서비스에서 인증 남용은 보안 리스크로 이어짐</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>인증 실패 후 아무런 제어 없이 계좌 등록 화면으로 복귀 가능. 재시도 횟수·시간 제한 로직이 FE에 없었음</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>Zustand로 lockedBanksStore 별도 구현 — 인증 실패 시 bankCode를 24시간 잠금. 잠긴 은행은 등록 화면에서 선택 불가 표시</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>금융 서비스에서 인증 실패 제어는 UX를 넘어 보안 문제. 재시도 제한 정책은 초기 설계 시 백엔드와 협의해야 함</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{'// 실패 후 즉시 재시도 가능'}</span>{'\n'}
                      <span className={styles.kw}>{'const'}</span>{' onVerifyFail = () => {\n  '}
                      <span className={styles.fn}>{'showToast'}</span>{'('}
                      <span className={styles.str}>{"'인증 실패'"}</span>{');\n  navigation.'}
                      <span className={styles.fn}>{'goBack'}</span>{'();\n  '}
                      <span className={styles.cm}>{'// 제한 없이 재시도 가능'}</span>{'\n};'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// 실패 시 24시간 잠금'}</span>{'\n'}
                      <span className={styles.kw}>{'const'}</span>{' LOCK_DURATION_MS\n  = 24 * 60 * 60 * 1000;\n\n'}
                      <span className={styles.kw}>{'const'}</span>{' onVerifyFail = (bankCode) => {\n  '}
                      <span className={styles.fn}>{'lockBank'}</span>{'(bankCode, {\n    lockedAt: Date.'}
                      <span className={styles.fn}>{'now'}</span>{'(),\n    duration: LOCK_DURATION_MS\n  });\n};'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. FCM 뱃지 알림 → Zustand 스토어 초기화 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>FCM</span>
                <span className={styles.troubleTitle}>뱃지 획득 알림 수신 후 화면이 갱신되지 않는 문제 — 이벤트-상태 동기화</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>서버에서 뱃지 획득 FCM 알림 수신 후 프로필·뱃지 화면이 자동으로 갱신되지 않아 앱을 재시작해야만 반영됨</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>Zustand 스토어가 최초 마운트 시 한 번만 fetch를 트리거하는 구조라, 이미 loaded 상태인 스토어는 FCM 이벤트를 받아도 재조회하지 않음</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>FCM 포그라운드 리스너에서 "뱃지 획득" 감지 시 resetBadgeStore() · resetProfileStore() 호출 → 두 스토어를 idle로 초기화해 다음 렌더에 자동 재조회</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>서버 이벤트(FCM)와 클라이언트 상태(Zustand) 동기화 전략은 기능 설계 초기에 포함해야 함</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.fn}>{'onMessage'}</span>{'(messaging, (msg) => {\n  '}
                      <span className={styles.fn}>{'showNotification'}</span>{'(msg);\n  '}
                      <span className={styles.cm}>{'// 스토어 갱신 없음'}</span>{'\n  '}
                      <span className={styles.cm}>{'// → 화면 그대로 유지됨'}</span>{'\n});'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.fn}>{'onMessage'}</span>{'(messaging, (msg) => {\n  '}
                      <span className={styles.fn}>{'showNotification'}</span>{'(msg);\n  '}
                      <span className={styles.kw}>{'if'}</span>{' (msg.notification?.title\n    ?.'}
                      <span className={styles.fn}>{'includes'}</span>{'('}
                      <span className={styles.str}>{"'뱃지 획득'"}</span>{')) {\n    '}
                      <span className={styles.fn}>{'resetBadgeStore'}</span>{'();\n    '}
                      <span className={styles.fn}>{'resetProfileStore'}</span>{'();\n  }\n});'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MSA 아키텍처 */}
          <section className={styles.section}>
            <h2>시스템 아키텍처 (MSA)</h2>

            <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '20px' }}>
              DuckChi는 5개의 마이크로서비스로 구성된 MSA 구조입니다.
              Nginx가 외부 요청을 받아 API Gateway로 전달하고, Gateway는 Eureka에서 서비스를 발견해 라우팅합니다.
              서비스 간 비동기 메시징은 Kafka가 담당하며, Redis는 세션·캐시를 처리합니다.
            </p>

            <div className={styles.msaGrid}>
              <div className={styles.msaCard}>
                <div className={styles.msaName}>Discovery Service</div>
                <div className={styles.msaDesc}>Eureka 기반 서비스 디스커버리 — 각 서비스 위치 등록 및 조회</div>
              </div>
              <div className={styles.msaCard}>
                <div className={styles.msaName}>Gateway Service</div>
                <div className={styles.msaDesc}>API 게이트웨이 — JWT 인증, 라우팅, 부하 분산</div>
              </div>
              <div className={styles.msaCard}>
                <div className={styles.msaName}>Core Service</div>
                <div className={styles.msaDesc}>사용자 인증, 프로필, 뱃지, 알림 (FCM), 랭킹</div>
              </div>
              <div className={styles.msaCard}>
                <div className={styles.msaName}>Pay Service</div>
                <div className={styles.msaDesc}>개인 결제, 모임방 공동 지출, 계좌 이체, 정산</div>
              </div>
              <div className={styles.msaCard}>
                <div className={styles.msaName}>Insight Service</div>
                <div className={styles.msaDesc}>OCR 영수증 인식 (Naver Clova), 소비 패턴 분석</div>
              </div>
              <div className={styles.msaCard}>
                <div className={styles.msaName}>외부 연동</div>
                <div className={styles.msaDesc}>SSAFY 금융 API · Naver Clova OCR · Firebase FCM · AWS S3</div>
              </div>
            </div>
          </section>

          {/* FE 아키텍처 */}
          <section className={styles.section}>
            <h2>프론트엔드 아키텍처 (MVVM)</h2>

            <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '16px' }}>
              Feature-First 구조에 MVVM 패턴을 적용해 View · ViewModel · Model을 명확히 분리했습니다.
              단방향 데이터 흐름(View → ViewModel → Model)으로 상태 변화를 예측 가능하게 관리했습니다.
            </p>

            <div className={styles.archTree}>
              {'src/\n'}
              {'├── core/                    '}<span className={styles.comment}># 공통 기능</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>navigation/</span>{'       '}<span className={styles.comment}># RootNavigator, AppNavigator, AuthNavigator</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>network/</span>{'          '}<span className={styles.comment}># axiosClient + authInterceptor + errorInterceptor</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>theme/</span>{'            '}<span className={styles.comment}># colors, typography, theme</span>{'\n'}
              {'│   └── '}<span className={styles.folder}>utils/</span>{'            '}<span className={styles.comment}># dateUtils, validatorUtils, formatUtils</span>{'\n'}
              {'├── features/                '}<span className={styles.comment}># 기능별 독립 모듈</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>auth/</span>{'             '}<span className={styles.comment}># 로그인 / 온보딩</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>bank/</span>{'             '}<span className={styles.comment}># 계좌 연동 (SSAFY 금융 API)</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>profile/</span>{'          '}<span className={styles.comment}># 프로필 / 뱃지 / 설정</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>room/</span>{'             '}<span className={styles.comment}># 모임방 (공동 지출 정산)</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>payment/</span>{'          '}<span className={styles.comment}># 개인 결제 / 이력</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>report/</span>{'           '}<span className={styles.comment}># 소비 리포트 (OCR)</span>{'\n'}
              {'│   └── '}<span className={styles.folder}>notification/</span>{'     '}<span className={styles.comment}># FCM 알림</span>{'\n'}
              {'└── shared/                  '}<span className={styles.comment}># 공용 컴포넌트</span>{'\n'}
              {'    ├── '}<span className={styles.folder}>components/</span>{'       '}<span className={styles.comment}># Button, AppBar, Modal, Toast, Loading...</span>{'\n'}
              {'    └── '}<span className={styles.folder}>types/</span>{'            '}<span className={styles.comment}># Pagination, ApiResponse 공통 타입</span>
            </div>

            <div className={styles.featureLabel} style={{ marginTop: '20px' }}>각 Feature의 내부 구조</div>
            <div className={styles.componentGrid}>
              <div className={styles.componentCard}>
                <div className={styles.compName}>models/</div>
                <div className={styles.compDesc}>{'{name}Service.ts'} — API 호출<br />{'{name}Types.ts'} — 타입 정의</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>viewmodels/</div>
                <div className={styles.compDesc}>{'use{Name}ViewModel.ts'}<br />상태 + 비즈니스 로직 (Zustand)</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>views/</div>
                <div className={styles.compDesc}>{'{Name}Screen.tsx'} — UI 화면<br />components/ — 화면별 컴포넌트</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>Navigation</div>
                <div className={styles.compDesc}>React Navigation Stack<br />Auth / App Navigator 분리</div>
              </div>
            </div>
          </section>

          {/* 마치며 */}
          <section className={styles.section}>
            <h2>마치며</h2>

            <div className={styles.resultCard}>
              <h4>구조 합의는 기능 개발보다 먼저</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                개발 시작 전 fe_docs로 폴더 구조·네이밍·MVVM 패턴을 문서화해 팀원들과 합의했습니다.
                덕분에 코드 리뷰에서 패턴 논쟁 없이 기능에 집중할 수 있었고,
                "파일을 어디에 만들어야 하나"를 묻는 일도 거의 없었습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>컴포넌트 추상화의 가치는 재사용보다 변경 용이성</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                shared 컴포넌트를 처음엔 재사용 목적으로 만들었는데, 더 큰 이점은 디자인 변경이었습니다.
                버튼 색상이나 상단바 스타일이 바뀔 때 한 파일만 수정하면 전체에 반영됐습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>TypeScript 타입만으로는 런타임 오류를 못 잡는다</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                SSAFY 금융 API 응답 필드명이 예상과 달라 화면이 빈 채로 렌더링되는 문제를 겪었습니다.
                Zod로 런타임 검증을 추가하고 스키마 불일치 시 명시적 에러를 발생시키도록 했습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>MSA에서 공통 응답 포맷 합의가 먼저</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                5개 서비스가 각자 API를 개발하다 보니 페이지네이션 필드명·에러 코드 구조가 서비스마다 달랐습니다.
                프론트에서 분기 처리가 점점 늘어났고, 초기에 공통 응답 포맷을 합의해야 한다는 것을 절실히 느꼈습니다.
              </p>
            </div>
          </section>

        </DetailContainer>
      </div>
    </div>
  )
}
