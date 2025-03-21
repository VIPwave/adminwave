export default async function ChartPage() {
  return (
    <>
      <div className="p-5 py-5 bg-chart overflow-hidden">
        <p className="mb-2">
          <span className="text-primary font-bold">VIPWAVE</span>는{" "}
          <span className="text-primary font-bold">
            빅뱅 음원총공팀 자체제작 사이트
          </span>
          입니다.
        </p>
        2월 25일 G-DRAGON 컴백과 앞으로의 빅뱅의 활동에 대한 화려한 서포트를
        위해 빅뱅음총팀에서는 총공 참여 독려 이벤트, 자체 사이트 제작 및 많은
        이벤트를 준비하고 있습니다. <br />
        많은 분들이 참여하고 싶은 이벤트를 준비하기 위해, <br />
        운영비 모금을 진행하니 많은 관심 부탁드립니다! <br />
        <p className="my-2 text-primary font-bold">
          카카오뱅크 3333-02-2695844 ㅂㅈㅎ
        </p>
        <p className="text-secondary">
          ** 모아주신 관심과 사랑은 소중하게 서버비용 및 음원나누기, 페이백 비용
          등으로 사용됩니다.
        </p>
      </div>
      <div className="p-5 text-secondary">
        <p>
          2만원 이상 모금해 주신 분들을 대상으로 활동 종료 후 정산 내역을
          공유드릴 예정이오니{" "}
          <a
            href="https://naver.me/G65mvn7j"
            target="_blank"
            className="font-bold underline"
          >
            폼 작성
          </a>{" "}
          부탁드립니다!
        </p>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
