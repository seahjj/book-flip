// 슬러그 기반 페이지 데이터 구조
const pageData = {
    'libertas': {
        slug: 'libertas',
        title: 'Libertas',
        titleKr: '리베르타스',
        subtitle: ':자유의 악마',
        code: '002459B',
        number: 1,
        audioUrl: 'name_sound/Libertas.mp3',
        content: '기원 후 830년대 — 850년대, 짧은 시간 동안만 관찰되었다. 9세기 경의 인류는 현 인류가 알고 있는 것과 달리 수준 높은 문명 사회를 이루었다. 리베르타스는 그 문명을 짓밟고 지면을 고르게 다진 악마이다. 가축의 모습을 하고 있어 그를 사육하려는 시도가 빈번했으나, 사육에 실패하고 살해 당한 자의 수를 헤아리기 어렵다. 지능 수준은 인간과 비슷하거나 그보다 아래이지만, 낮은 지능에서 비롯되는 무모함을 예측할 수 없어 위험하다. 자아가 약한 다른 악마들을 부리는 능력을 가졌다. 리베르타스의 연인을 먼저 포획한다면, 낮은 확률로 그의 사육에 성공할 수도 있다. 다만 그가 이내 곧 자살할 수 있으므로 주의하며 길들일 것을 명심해야 한다. 리베르타스는 인간을 싫어하는 악마가 아니다. 리베르타스의 아이가 된다면, 그는 흔쾌히 당신을 지키는 검이 될 것이다. 하지만 악마의 방식을 따르는 그를 맹신해서는 위험하다. 거세의 악마 [[캐스트라티오|castratio]]의 동생이라는 사실이 그의 손위 형제 본인에 의해 밝혀졌다.',
        image: 'images/libertas-illustration.png',
        imageCaption: '리베르타스의 연인¹ | 충신의 악마 *fides 피데스* (19B3DA2), 무력의 악마라고도 불리며 그의 전투력을 감당할 수 있는 병기를 찾기 어렵다. 리베르타스의 아이² | 관찰 기록된 결과를 중심으로, 그의 아이가 되었던 인간의 수는 최소 일곱이 넘는다.\n\n캐스트라티오³ | 거세의 악마 castratio 캐스트라티오 (073ACD8).',
        references: [
            { text: '캐스트라티오', slug: 'castratio' },
            { text: '디지투스', slug: 'digitus' }
        ]
    },
    'separatio': {
        slug: 'separatio',
        title: 'Separatio',
        titleKr: '세파라티오',
        subtitle: ':고립의 악마',
        code: '556979A',
        number: 2,
        audioUrl: 'name_sound/Separatio.mp3',
        content: '*세파라티오*는 현대 인류 사상 가장 광범위한 능력을 가진 악마였다. 2019년 — 2023년, 그의 힘은 타 악마를 월등히 능가해 지배적이었으며, 당시 세파라티오의 저주⁴는 전 인류를 단위로 영향을 미쳤다. 박쥐를 먹은 인간이 세파라티오로 변한 것이라는 가설이 있으나, 이는 명확한 사실 관계를 확인하기 어려워 정설로 다뤄지지 않는다. 이러한 가설은 그의 모습이 박쥐를 닮았다는 데서 기원한 것으로 보인다. 언뜻 아주 작은 박쥐처럼 보이는 이 악마는 인간의 눈에 자주 띄지 않으며 기척이 없다. 저주를 건 인간의 집을 둥지 삼아 기생하는데, 그가 전 인류를 대상으로 저주를 내렸을 때 그는 전 세계 어느 곳에나 존재하고 있었던 것이나 다름이 없다. 세파라티오의 저주는 고립을 초래하나, 아이러니하게도 그의 저주를 피하는 방법은 스스로를 고립시키는 것이다. 몇몇 국가들은 세파라티오에 대항하는 조직을 꾸려 인간 고립을 적극 권장하기도 했다. 세파라티오의 저주⁴를 받거나 그를 두려워한 인간들의 고립으로 당시 지구는 원시 자연 생태를 회복하기도 했다. 현재는 그의 등장 초기 대비 상당히 약한 악마가 되었지만, 여전히 수십 수백 인간의 목숨을 쥐고 흔들 수 있는 힘을 갖고 있다.',
        image: 'images/separatio-illustration.png',
        imageCaption: '세파라티오의 저주⁴ | 그의 저주에 걸린 인간은 고열과 기침에 시달리며, 경우에 따라 목숨을 잃는 인간도 있다. 저주를 받은 당사자와의 접촉으로 전염될 수 있다. ',
        references: []
    },
    'digitus': {
        slug: 'digitus',
        title: 'Digitus',
        titleKr: '디지투스',
        subtitle: ':손가락의 악마',
        code: '3A4061D',
        number: 3,
        audioUrl: 'name_sound/Digitus.mp3',
        content: '19세기 전반에 걸쳐 유럽에서 발견된 악마이다. 헝가리를 시작으로, 리스본에서 모스크바에 이르는 넓은 지역에서 그의 흔적을 발견할 수 있다. 그는 주로 시각이 아니라 청각으로 사람들에게 감각 되고는 했다. 주로 피아노 선율 같은 울음소리를 내는 *디지투스*는 눈에 보이는 악마가 아니라 귀로 들어야 하는 악마이다. 디지투스의 악보⁵를 구한다면 그 울음소리를 연주할 수 있다. 다만, 그의 울음소리를 모방하려는 이들은 손가락이 짓이기는 고통을 감내해야 한다. 디지투스의 악보를 둔 피아노의 건반 덮개를 덮지 않고 방 문을 닫으면 *디지투스*가 찾아와 운다는 전승이 있다. 주로 아이들이 모두 귀가한 뒤 밤중의 학교 음악실에서 자주 일어나는 일이다. 소리가 들리는 방문 틈새로 들여다 보면 허공에서 현란하게 피아노를 연주하는 예순 여섯 쌍의 손을 볼 수 있다. 손가락들은 허공에 부유하는 듯 보이지만, 자세히 들여다 본다면 손가락들이 방 안의 어둠 만큼이나 새까맣고 거대한 몸에 붙어 있다는 것을 알 수 있다. 현의 악마 *코르다룸*⁶과 함께 언급되는 일이 자주 있다.',
        image: 'images/digitus-illustration.png',
        imageCaption: '디지투스의 악보⁵ | 이 기록의 주체가 그를 부러워한 타인인지, 소리를 사랑한 디지투스 자신인지는 확실히 알기 어렵다. 코르다룸 ⁶ | 현絃의 악마 chordarum 코르다룸 (024569A).',
        references: []
    },
    'castratio': {
        slug: 'castratio',
        title: 'Castratio',
        titleKr: '캐스트라티오',
        subtitle: ':거세의 악마',
        code: '073ACD8',
        number: 4,
        audioUrl: 'name_sound/Castratio.mp3',
        content: '820년대 — 850년대에 활동한 악마이다. 털이 수북한 영장류의 몸에 갈기 없는 사자의 머리를 한 추한 모습을 갖고 있으며, 인간의 언어를 구사할 수 있는 몇 안되는 악마 중 하나이다. 캐스트라티오*는 낫처럼 예리한 신체 기관을 갖고 있다. 이 기관은 인간의 배를 갈라 잉태에 관련한 장기를 적출해 불구로 만든다. 기관의 잔혹한 생김새나 기능과는 달리, 이러한 거세 방법은 그 대代의 개체에게는 큰 위협이 되지 못한다. 다만 그들 후손의 잠재적인 존재 가능성을 지워버릴 뿐이다. 리베르타스⁷에 대한 강한 애착을 보인다. 이 일방적인 애정은 일종의 콤플렉스⁸에서 기인한 것으로 추측된다. 신념이 없는 그는 때때로 자살을 기도할 수 있다. 그에게 삶의 의미를 만들어주는 일을 게을리 해서는 안된다. 캐스트라티오의 체액을 마신 인간은 그의 포효와 함께 지성이 없는 악마로 변화하며, 그의 명에 따르는 병졸이 된다. *리베르타스*와는 달리 평균적인 인간 수준을 능가하는 지능 수준을 가졌으며, 포효를 활용한 지략적인 방법으로 인간을 공격하기도 한다. 정을 기반한 관계에 연연하는 성격으로, 애정은 이 악마를 길들이는 좋은 수단이 된다.',
        image: 'images/castratio-illustration.png',
        imageCaption: '*리베르타스*⁷ | 자유의 악마 Libertas 리베르타스 (002459B), 캐스트라티오의 이복 형제. 콤플렉스⁸ | 캐스트라티오는 그의 아버지, 순응의 악마 conformitas 콘포르미타스를 원망한다. 일종의 파더 콤플렉스.',
        references: [
            { text: '리베르타스', slug: 'libertas' }
        ]
    },
    'victoriae': {
        slug: 'victoriae',
        title: 'Victoriae',
        titleKr: '빅토리아에',
        subtitle: ':승리의 악마',
        code: '022D3B4',
        number: 5,
        audioUrl: 'name_sound/Victoriae.mp3',
        content: '일본, 특히나 도쿄에서 주로 관찰되는 악마이다. 열도의 하늘을 밝히는 것과 흐리게 하는 것 모두 그의 폭발과 관련이 있다. 날개와 같은 기관이 없지만 폭발의 위력을 활용해 비행하거나 빠르게 이동할 수 있으며, 공중 전투 또한 능하다. 그의 몇 없는 전투 상의 약점 중 하나는 물에 젖는 것이다. 일반 화약과 같이 물에 젖었을 때 폭발의 위력이 줄어들거나, 그 기능을 완전히 상실한다. *디시플리나* ⁹가 그를 뒤쫓아 다니는 모습을 자주 목격할 수 있다. *빅토리아에*를 여신 니케로 착각한 증언이 적지 않은데, 이는 그의 모습이 여신의 모습을 닮기 때문이다. 이기는 것에 대한 강한 집착이 그의 외형마저 바꾸었다. *빅토리아에*가 무리에 속해 있을 때, 그는 무리를 지키는 역할을 자처한다. 그가 무리를 지키는 방식은 집단에 승리를 안겨다 주는 것으로, 이를 위해서는 자신의 몸을 전부 조각 내 터뜨리기도 한다. 그가 집단의 승리를 위해 몸을 터뜨렸을 때, 그의 심장 또한 조각나 폭발하면서 멎어버렸다. 현재 그의 심장은 다른 악마의 살로 꿰매어져 있다.',
        image: 'images/victoriae-illustration.png',
        imageCaption: '디시플리나 ⁹ | 자학의 악마 disciplina 디시플리나 (69ABCCD).',
        references: []
    },
    'inquisitionis': {
        slug: 'inquisitionis',
        title: 'Inquisitionis',
        titleKr: '인퀴시티온스',
        subtitle: ':탐구의 악마',
        code: '014D9BC',
        number: 6,
        audioUrl: 'name_sound/Inquisitionis.mp3',
        content: '*인퀴시티온스*는 지금으로부터 약 1200년 전, 810년대 — 850년대에 존재했다고 알려진 악마이며, *모나치* ¹⁰가 섬긴 주군이다. 몸집이 크고 위압적이나, 인간과 이성적으로 대화할 줄 아는 유순하고 영민한 악마라고 전해진다. 그의 호기심을 충족하는 이해관계를 제안할 수 있다면, 그는 기꺼이 전장의 지휘자가 될 것이다. 돌처럼 단단한 피부 조직이 서로 마찰 해 갈기를 불태운다. 개인의 안전과 이익보다 대의를 추구하는 성향이 강하다. 정중하고 차분한 목소리로 말하는 그는 자칫 합리주의자처럼 보이지만, 사실 그를 움직이는 것은 합리성이 아니라 탐구에 대한 비이성적 욕망이다. 욕구 해소에 도움이 된다면 아군의 희생을 서슴지 않는다. 전투 중 무리한 작전 속행으로 인해 한 팔을 잃었다. 부상 이후 *모나치*와 *오피춈* ¹¹에게 전투 현장을 일임하고 더욱 지략적인 지휘자가 되었다. 회복 불가능한 상해를 입어 재기할 수 없었으나, *모나치*의 기도¹²가 통해 바람이 된 것으로 알려졌다.',
        image: 'images/inquisitionis-illustration.png',
        imageCaption: '*모나치* ¹⁰ | 주군의 악마 *monarch 모나치* (CB9B6D2). *오피춈* ¹¹ | 책임의 악마 *officium 오피춈* (DB9C870).기도¹² | 죽음은 악마에게 허락되지 않는다. 따라서 목숨을 잃어 마땅한 상처를 입어도 죽지 아니하고 고통만이 지속된다. 이 때 타자의 진심 어린 염원이 있다면, 고통이 느껴지지 않을 정도로 작은 입자 단위로 흩어져 사라질 수 있다.',
        references: []
    },
    'resuscitatio': {
        slug: 'resuscitatio',
        title: 'Resuscitatio',
        titleKr: '레소시타티오',
        subtitle: ':소생의 악마',
        code: '145AD52',
        number: 7,
        audioUrl: 'name_sound/Resuscitatio.mp3',
        content: '연구 단체는 1860년대, 산업혁명이 한창이던 기술의 격변기를 그의 출현 시기로 추정한다. 미국에서는 19세기 후반 대서양 지역부터 관찰 기록이 시작된 것으로 확인되었으며, 캐나다와 유럽에서는 그보다 늦은 20세기 중반부터 기록을 확인할 수 있다. 출현 당시에는 관측이 힘들 정도로 크기가 작고 그 세가 약했지만, 21세기에 들어서며 권세의 확장 속도를 가속화하고 있다. 레소시타티오를 연구하는 단체는 80년 이내로 그의 영향력이 더욱 커질 것으로 예상하고 있다. 단체는 그가 21세기 중엽에는 약 6억명에 달하는 인구를 위험에 빠뜨릴 것이라고 예언했다. 머지 않아 도래할 그의 강점에 대비해야 한다는 국제 조직의 주장이 다수 있으나, 그 말을 귀담아 실천하는 이가 없다. 해안 지역에 사는 사람들의 안전을 위협하며, 폭풍이 이는 날 바다 사람들의 자취를 숨기거나 목숨을 앗아가는 일이 늘고 있다. 일부 이상종말론자들은 레소시타티오가 가진 소생의 힘을 신뢰하고 있다. 파도를 두른 범선과 같은 신체는 인류의 어떠한 무기나 공격으로도 해를 입힐 수 없다. 칼로 물을 베어낼 수 없는 것과 동일한 이치가 그에 해당한다.',
        image: 'images/resuscitatio-illustration.png',
        imageCaption: '이상종말론자¹³ | 레소시타티오를 숭배하는 집단. 그가 불러온 종말 이후, 소생의 힘이 지구 생태를 재건할 것이라고 믿는다.',
        references: [
            { text: '세파라티오', slug: 'separatio' },
            { text: '리베르타스', slug: 'libertas' }
        ]
    },
    'dominatio': {
        slug: 'dominatio',
        title: 'Dominatio',
        titleKr: '도비나티오',
        subtitle: ':지배의 악마',
        code: '00456D8',
        number: 8,
        audioUrl: 'name_sound/Dominatio.mp3',
        content: '도비나티오는 창작 환경을 지배하는 악마다. 최초 등장 시기는 20세기 말이지만, 보다 본격적으로 영향 범위를 확대한 것은 2000년대에 들어선 이후이다. 도비나티오의 영토에 들어선다면 그의 간섭을 피할 수 없다. 생각하는 방식이 그의 체계 안에 갇히게 된다. 스스로를 누구보다도 자유롭다고 믿는 창작가들을 은밀히 구속한다. 눈에 보이지 않는 지배 형태를 띄었기 때문에, 자신의 구속 여부를 스스로 진단하기 어렵다. 그의 부재는 혼란을 초래한다. 대부분의 체계가 도비나티오의 규범을 전제로 설계되어 있어, 그가 사라지면 창작의 체계가 즉시 붕괴할 수 있다. 도비나티오는 단순한 지배자가 아니라 창작 기관의 구조적 토대다. 근 몇 년 사이 그와 성격이 유사한 악마들이 여럿 등장했다. 피지배자들은 그를 두려워하면서도, 그를 대체할 또다른 군주가 생기는 것을 두려워 한다. 사람이 보다 익숙한 지배에 순응하는 것은 일반적이다.',
        image: 'images/dominatio-illustration.png',
        imageCaption: '도비나티오의 영토¹⁴ | 주로 디지털 상에 존재하며 물질주의적 가치관으로는 설명하기 어려운 형태를 지녔다.',
        references: []
    },
    'discrimen': {
        slug: 'discrimen',
        title: 'Discrimen',
        titleKr: '디스크리밍',
        subtitle: ':선별의 악마',
        code: '01234CD',
        number: 9,
        audioUrl: 'name_sound/Discrimen .mp3',
        content: '19세기 말 — 20세기 중반 관찰된 악마로, 20세기 초입은 디스크리밍의 재앙 자체였다. 그는 확고한 자신만의 기준으로 개체를 구분했으며, 이는 개체를 다루는 수단으로 기능했다. 그가 아군으로 분류한 개체는 살아남아 그의 수족이 되어 학살을 일삼았고, 아군이 되지 못한 개체는 그 학살의 대상으로 전락했다. 수족을 모아 만든 그의 군대는 자아를 잃었으며, 진정으로 그의 신체 일부가 되어 움직였다. 늑대 또는 개를 닮았다는 목격담이 많다. 늑대와 착각할 정도의 덩치를 갖고 있지만, 야생 늑대라고 여기기에는 잘 관리된 듯 윤이 나는 털이 사람 손을 탄 개처럼 보인다. 이를 아름답다고 여겨 쉽게 현혹될 수 있으므로 주의가 필요하다. 디스크리밍의 음성은 보통 인간의 것과는 확연히 다르다. 마치 전파를 잡으려 애쓰는 라디오에서 흘러나오는 듯한 소리로 학살을 명령한다. 디스크리밍의 사랑과 자비는 악마의 방식을 따른다. 그의 자비는 대체로 고통 없이 맞이하는 안식을 의미한다. 그의 언변술에 놀아나지 않기 위해서는 각별히 주의해야 한다. 그는 수족을 부림에 있어 강제하는 일이 없다. 수족이 스스로 학살자가 되도록 유도하는 것이다.',
        image: 'images/discrimen-illustration.png',
        imageCaption: '디스크리밍의 재앙¹⁵ | 특히 1930년대 말 — 1940년대 중엽 무렵을 의미한다.',
        references: []
    },
    'literature': {
        slug: 'literature',
        title: 'Literature',
        titleKr: '리트라쵸르',
        subtitle: ':문학의 악마',
        code: '8D70303',
        number: 10,
        audioUrl: 'name_sound/Literature.mp3',
        content: '영국 태생의 이 악마는 펜촉 끝에서 나타난다. 전세계 각지의 그가 잉태한 산물이 그의 이동 통로가 된다. 이 통로를 통해 그는 세계 어디라도 손을 뻗을 수 있는 힘을 가진다. 리트라쵸르가 지나온 이름이 네 개 있다. 그 중 세 개의 이름은 악마의 진짜 이름이라고 할 수 없다. 네 개의 이름 중 진짜 이름을 부를 수 있는 자만이 이 악마를 진정으로 마주할 자격을 갖는다. 인간에 의해 입은 상처가 흉이 진 자국이 있다. 이는 인류가 진 죄악은 아니나, 악마는 이것을 더 많은 인간에게 갚아주려고 할지도 모른다. 이것이 정당한 복수인지, 굴절된 혐오인지는 알 길이 없다. 자신이 가진 것을 나누기를 좋아한다. 어여삐 여기는 마음으로 자선을 베풀고는 한다. 만년필 촉과 같이 예리한 뿔 모양의 천을 뒤집어 쓴 모습이다. 두 발로 걸으면서 크기도 보통의 인간과 다름이 없어 인간이라고 생각하는 경우가 종종 있다. 그를 마녀라고 여겨 사냥하려는 시도 또한 빈번하다. 리트라쵸르가 모든 인간을 공격하는 것은 아니다. 공격의 대상이 되는 부류는 몇 가지로 정리해 말할 수 있다.',
        image: 'images/literature-illustration.png',
        imageCaption: '리트라쵸르는 영국 태생의 문학의 악마로, 펜촉 끝에서 나타나며 전세계 각지의 그가 잉태한 산물을 통해 이동합니다.',
        references: [
            { text: '디스크리밍', slug: 'discrimen' }
        ]
    }
};

$(document).ready(function() {
    let currentPage = 'archive';
    let flipbookReady = false; // 플립북 초기화 완료 플래그

    // 아카이브 책 클릭 이벤트
    $('#archive-book').on('click', function() {
        const $book = $(this);
        const $archivePage = $('#archive-page');
        
        // 책 색상 전환 애니메이션
        $book.addClass('flipped');
        $archivePage.addClass('flipped');
        
        // 색상 전환 후 인트로 페이지로 이동
        setTimeout(function() {
            switchPage('archive', 'intro');
            startIntroAnimation();
        }, 800);
    });

    // 다음 버튼 클릭 이벤트
    $('#next-btn').on('click', function() {
        // 페이드 아웃 처리
        $('#intro-page').addClass('fade-out');
        
        setTimeout(function() {
            // 아카이브 페이지로 돌아가기
            $('#archive-page').removeClass('active');
            $('#archive-book').removeClass('flipped');
            $('#archive-page').removeClass('flipped');
            
            // 플립북 페이지로 이동
            switchPage('intro', 'flipbook');
            initFlipbook();
        }, 800);
    });

    // 페이지 전환 함수
    function switchPage(from, to) {
        const pageMap = {
            'archive': '#archive-page',
            'intro': '#intro-page',
            'flipbook': '#flipbook-page'
        };

        $(pageMap[from]).removeClass('active');
        setTimeout(function() {
            $(pageMap[to]).addClass('active');
            currentPage = to;
        }, 300);
    }

    // 인트로 애니메이션 시작
    function startIntroAnimation() {
        setTimeout(function() {
            $('#intro-page').addClass('active');
            
            // "Intro..." 제목이 먼저 나타난 후, 약간의 딜레이를 두고 줄글이 나타나도록
            setTimeout(function() {
                const textLines = $('.intro-text-line');
                let delay = 0;
                
                textLines.each(function(index) {
                    const $line = $(this);
                    setTimeout(function() {
                        $line.addClass('visible');
                        
                        // 마지막 줄이 나타난 후 버튼 표시
                        if (index === textLines.length - 1) {
                            setTimeout(function() {
                                $('#next-btn').show().addClass('visible');
                            }, 600);
                        }
                    }, delay);
                    delay += 900; // 각 줄마다 0.5초 간격
                });
            }, 1000); // "Intro..." 제목이 나타난 후 1초 뒤에 줄글 시작
        }, 100);
    }

    // 중앙 네비게이션 초기화
    function initCenterNav() {
        const $navNumbers = $('#nav-numbers');
        $navNumbers.empty();
        
        // 1-10번까지 번호 버튼 생성
        for (let i = 1; i <= 10; i++) {
            const $numberBtn = $('<button class="nav-number-btn" data-number="' + i + '">' + i + '</button>');
            $navNumbers.append($numberBtn);
        }
        
        // 현재 페이지 업데이트
        updateNavCurrentPage();
    }

    // 현재 페이지 번호 업데이트
    function updateNavCurrentPage() {
        const $flipbook = $('.flipbook');
        
        // turn.js가 초기화되었는지 확인 (try-catch로 안전하게)
        let currentPageNum;
        try {
            currentPageNum = $flipbook.turn('page');
            if (!currentPageNum || currentPageNum === undefined) {
                console.log('[Nav 업데이트] 페이지 번호를 가져올 수 없음');
                return;
            }
        } catch (error) {
            console.log('[Nav 업데이트] turn.js가 초기화되지 않음:', error);
            return;
        }
        console.log('[Nav 업데이트] 현재 turn.js 페이지 번호:', currentPageNum);
        
        // turn.js 페이지 번호를 pageData의 number로 변환
        // turn.js는 스프레드(2페이지씩)로 표시하므로:
        // - 1페이지: 앞표지
        // - 2-3페이지: 항목 1번 (왼쪽 2, 오른쪽 3)
        // - 4-5페이지: 항목 2번 (왼쪽 4, 오른쪽 5)
        // - ...
        // turn('page')는 왼쪽 페이지 번호를 반환합니다
        // 항목 n번의 왼쪽 페이지 = (n-1)*2 + 2
        // 역변환: number = (currentPageNum - 2) / 2 + 1
        let currentItemNumber = 0;
        
        if (currentPageNum === 1) {
            currentItemNumber = 0; // 앞표지
            // console.log('[Nav 업데이트] 앞표지 페이지');
        } else {
            // 왼쪽 페이지 번호를 기준으로 계산
            // turn.js는 스프레드(2페이지씩)로 표시하므로:
            // - 2-3페이지: 항목 1번 (왼쪽 2, 오른쪽 3)
            // - 4-5페이지: 항목 2번 (왼쪽 4, 오른쪽 5)
            // - 홀수/짝수 모두 같은 항목에 속함
            const calculatedNum = (currentPageNum - 2) / 2 + 1;
            const itemNum = Math.floor(calculatedNum);
            
            // console.log('[Nav 업데이트] 계산된 항목 번호:', itemNum, '(페이지:', currentPageNum, ', 계산값:', calculatedNum, ')');
            
            if (itemNum >= 1 && itemNum <= 10) {
                currentItemNumber = itemNum;
            } else {
                console.warn('[Nav 업데이트] 유효하지 않은 항목 번호:', itemNum);
            }
        }
        
        const $navCurrent = $('.nav-current');
        if (!$navCurrent.length) {
            console.error('[Nav 업데이트] .nav-current 요소를 찾을 수 없음');
            return;
        }
        
        if (currentItemNumber > 0) {
            $navCurrent.text(currentItemNumber);
            // console.log('[Nav 업데이트] Nav 번호 업데이트:', currentItemNumber);
        } else {
            $navCurrent.text('-');
            // console.log('[Nav 업데이트] Nav 번호 업데이트: - (앞표지)');
        }
        
        // 번호 버튼 활성화 상태 업데이트
        $('.nav-number-btn').removeClass('active');
        if (currentItemNumber > 0) {
            const $activeBtn = $('.nav-number-btn[data-number="' + currentItemNumber + '"]');
            if ($activeBtn.length) {
                $activeBtn.addClass('active');
                // console.log('[Nav 업데이트] 번호 버튼 활성화:', currentItemNumber);
            }
        }
    }

    // 플립북 초기화
    function initFlipbook() {
        // 중앙 네비게이션 초기화
        initCenterNav();
        
        // 데이터 기반으로 페이지 생성
        renderPagesFromData();
        
        // 페이지가 완전히 렌더링될 때까지 대기
        setTimeout(function() {
            const $flipbook = $(".flipbook");
            
            // CSS vw 기반 크기를 실제 픽셀 값으로 계산
            // CSS: width: 90vw, height: 60vw
            const viewportWidth = $(window).width();
            
            // vw 기반 계산 (90vw, 60vw)
            let flipbookWidth = viewportWidth * 0.9;
            let flipbookHeight = viewportWidth * 0.6; // width 기준으로 비율 유지
            
            // 최대 크기 제한 (CSS max-width, max-height와 동일)
            flipbookWidth = Math.min(flipbookWidth, 1400);
            flipbookHeight = Math.min(flipbookHeight, 900);
            
            // cornerSize를 적절히 설정 (너무 크면 콘텐츠가 잘림)
            // 모서리 감지 영역은 작게, 콘텐츠 보호를 위해
            const cornerSize = Math.min(flipbookWidth * 0.12, flipbookHeight * 0.12, 120);
            
            // 커서 이미지 경로 설정 (images 폴더에 위치)
            const cursorConfig = {
                flipBase: 'images/flip-cursor.png', // 기본 flip 커서 (선택사항)
                flipNext: 'images/flip-next.png',  // 앞으로 넘기기 커서
                flipPrev: 'images/flip-prev.png'   // 뒤로 넘기기 커서
            };
            
            // turn.js 초기화 (CSS는 vw로 유지, turn.js에는 px 값 전달)
            $flipbook.turn({
                width: flipbookWidth,
                height: flipbookHeight,
                autoCenter: true,
                gradients: true,
                elevation: 30, // elevation을 낮춰서 덜 들리도록
                cornerSize: cornerSize, // 페이지 크기에 비례한 감지 영역
                turnCorners: 'all', // 모든 모서리에서 페이지 넘김 가능
                duration: 700, // 애니메이션 속도 조정
                when: {
                    turning: function(event, page, view) {
                        // 페이지 넘김 중 콘텐츠 보호
                        const $turningPage = $(view[0]);
                        if ($turningPage.length) {
                            $turningPage.find('.page-content').css({
                                'overflow': 'hidden',
                                'pointer-events': 'none'
                            });
                        }
                        // 페이지 넘기는 중에도 즉시 업데이트 (반응성 향상)
                        // 약간의 딜레이를 주어 페이지 번호가 확실히 변경된 후 업데이트
                        setTimeout(function() {
                            updateNavCurrentPage();
                        }, 50);
                    },
                    turned: function(event, page, view) {
                        // 페이지 넘김 완료 후 원래대로
                        $('.flipbook .page-content').css({
                            'overflow': '',
                            'pointer-events': ''
                        });
                        
                        // 네비게이션 현재 페이지 업데이트
                        updateNavCurrentPage();
                    }
                }
            });
            
            // 기본 드래그 인터랙션 비활성화
            $flipbook.turn('disable', true);
            
            // 플립북 초기화 완료 플래그 설정
            flipbookReady = true;
            console.log('플립북 초기화 완료');

            // 초기 현재 페이지 표시
            updateNavCurrentPage();

            // 커서 기반 클릭 인터랙션 설정
            setupCursorInteraction($flipbook, cornerSize, cursorConfig);
            
            // 윈도우 리사이즈 시 크기 업데이트
            let resizeTimer;
            $(window).off('resize.flipbook').on('resize.flipbook', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    const $flipbook = $(".flipbook");
                    const newViewportWidth = $(window).width();
                    let newWidth = newViewportWidth * 0.9;
                    let newHeight = newViewportWidth * 0.6;
                    
                    newWidth = Math.min(newWidth, 1400);
                    newHeight = Math.min(newHeight, 900);
                    
                    try {
                        $flipbook.turn('size', newWidth, newHeight);
                    } catch (e) {
                        // turn.js가 아직 초기화되지 않음
                    }
                }, 250);
            });
        }, 500); // 렌더링 대기 시간 증가
    }

    // 페이지 넘김 인디케이터 설정
    function setupCursorInteraction($flipbook, cornerSize, cursorConfig) {
        let hoveredArea = null; // 'left' 또는 'right'
        
        // 커서 이미지 경로 (선택사항 - 나중에 사용 가능)
        const cursorImages = {
            flipNext: cursorConfig.flipNext || null,
            flipPrev: cursorConfig.flipPrev || null
        };
        
        // 페이지 넘김 인디케이터 생성 (flipbook 외부에 배치)
        const $prevIndicator = $('<div class="page-nav-indicator page-nav-prev"><span class="nav-text">이전</span></div>');
        const $nextIndicator = $('<div class="page-nav-indicator page-nav-next"><span class="nav-text">다음</span></div>');
        
        // flipbook-page에 인디케이터 추가 (flipbook 외부)
        const $flipbookPage = $('#flipbook-page');
        $flipbookPage.append($prevIndicator, $nextIndicator);
        
        // 인디케이터 숨기기
        function hideIndicators() {
            $prevIndicator.removeClass('active');
            $nextIndicator.removeClass('active');
        }
        
        // 인디케이터 표시
        function showIndicator(type) {
            hideIndicators();
            if (type === 'prev') {
                $prevIndicator.addClass('active');
            } else if (type === 'next') {
                $nextIndicator.addClass('active');
            }
        }
        
        // 인디케이터 위치 업데이트 함수
        function updateIndicatorPosition() {
            const $flipbook = $('.flipbook');
            const flipbookOffset = $flipbook.offset();
            const flipbookWidth = $flipbook.outerWidth();
            const flipbookHeight = $flipbook.outerHeight();
            const flipbookTop = flipbookOffset.top;
            const flipbookLeft = flipbookOffset.left;
            
            // 왼쪽 인디케이터: flipbook 왼쪽 외부
            $prevIndicator.css({
                left: '5%',
                top: '50%',
                transform: 'translateY(-50%)'
            });
            
            // 오른쪽 인디케이터: flipbook 오른쪽 외부
            $nextIndicator.css({
                left: '90%',
                top: '50%',
                transform: 'translateY(-50%)'
            });
        }
        
        // 초기 위치 설정 및 리사이즈 시 업데이트
        setTimeout(updateIndicatorPosition, 100);
        $(window).on('resize', updateIndicatorPosition);
        
        // 마우스 이동 이벤트로 페이지 영역 감지 (좌우 절반)
        $flipbook.on('mousemove.cursor', function(e) {
            e.stopPropagation();
            const offset = $flipbook.offset();
            const x = e.pageX - offset.left;
            const width = $flipbook.width();
            
            // 현재 페이지 확인
            const currentPage = $flipbook.turn('page');
            const totalPages = $flipbook.turn('pages');
            
            // 페이지를 좌우로 나눔
            const halfWidth = width / 2;
            let detectedArea = null;
            
            // 왼쪽 절반 (이전 페이지)
            if (x < halfWidth && currentPage > 1) {
                detectedArea = 'left';
            }
            // 오른쪽 절반 (다음 페이지)
            else if (x >= halfWidth && currentPage < totalPages) {
                detectedArea = 'right';
            }
            
            // 인디케이터 표시/숨김 및 커서 변경
            if (detectedArea) {
                if (hoveredArea !== detectedArea) {
                    hoveredArea = detectedArea;
                    // 인디케이터 표시
                    if (detectedArea === 'left') {
                        showIndicator('prev');
                    } else if (detectedArea === 'right') {
                        showIndicator('next');
                    }
                    // 커서 변경 (이미지가 있으면 이미지 사용, 없으면 pointer)
                    let cursorValue = 'pointer';
                    
                    // 커서 이미지가 있고 로드되었으면 사용
                    if (detectedArea === 'left' && cursorImages.flipPrev) {
                        cursorValue = 'url("' + cursorImages.flipPrev + '"), pointer';
                    } else if (detectedArea === 'right' && cursorImages.flipNext) {
                        cursorValue = 'url("' + cursorImages.flipNext + '"), pointer';
                    }
                    
                    $flipbook.css('cursor', cursorValue);
                    $flipbook.find('*').css('cursor', cursorValue);
                    $('body').css('cursor', cursorValue);
                }
            } else {
                if (hoveredArea !== null) {
                    hoveredArea = null;
                    hideIndicators();
                    // 커서를 기본값으로 복원
                    $flipbook.css('cursor', 'default');
                    $flipbook.find('*').css('cursor', '');
                    $('body').css('cursor', 'default');
                }
            }
        });
        
        // 마우스가 flipbook 영역을 벗어날 때
        $flipbook.on('mouseleave.cursor', function() {
            hoveredArea = null;
            hideIndicators();
            // 커서를 기본값으로 복원
            $flipbook.css('cursor', 'default');
            $flipbook.find('*').css('cursor', '');
            $('body').css('cursor', 'default');
        });
        
        // 인디케이터 클릭 이벤트
        $prevIndicator.on('click', function(e) {
            e.stopPropagation();
            const currentPage = $flipbook.turn('page');
            if (currentPage > 1) {
                $flipbook.turn('disable', false);
                $flipbook.turn('previous');
                setTimeout(function() {
                    $flipbook.turn('disable', true);
                    updateNavCurrentPage(); // Nav 업데이트
                }, 750); // 애니메이션 완료 후
            }
            hideIndicators();
        });
        
        $nextIndicator.on('click', function(e) {
            e.stopPropagation();
            const currentPage = $flipbook.turn('page');
            const totalPages = $flipbook.turn('pages');
            if (currentPage < totalPages) {
                $flipbook.turn('disable', false);
                $flipbook.turn('next');
                setTimeout(function() {
                    $flipbook.turn('disable', true);
                    updateNavCurrentPage(); // Nav 업데이트
                }, 750); // 애니메이션 완료 후
            }
            hideIndicators();
        });
        
        // 페이지 영역 클릭 이벤트로 페이지 넘김 (좌우 절반)
        $flipbook.on('click.cursor', function(e) {
            if (hoveredArea) {
                const currentPage = $flipbook.turn('page');
                const totalPages = $flipbook.turn('pages');
                
                // turn.js 활성화
                $flipbook.turn('disable', false);
                
                // 페이지 넘김 방향 결정
                if (hoveredArea === 'left') {
                    // 이전 페이지
                    if (currentPage > 1) {
                        $flipbook.turn('previous');
                    }
                } else if (hoveredArea === 'right') {
                    // 다음 페이지
                    if (currentPage < totalPages) {
                        $flipbook.turn('next');
                    }
                }
                
                // 페이지 넘김 완료 후 다시 비활성화
                setTimeout(function() {
                    $flipbook.turn('disable', true);
                    updateNavCurrentPage(); // Nav 업데이트
                }, 750); // 애니메이션 완료 후
                
                // 인디케이터 숨기기
                hoveredArea = null;
                hideIndicators();
            }
        });
    }

    // 데이터 기반 페이지 렌더링 함수
    function renderPagesFromData() {
        const $flipbook = $('.flipbook');
        
        // 기존 콘텐츠 페이지 제거 (hard 페이지는 유지)
        $flipbook.find('.page-content').remove();
        
        // 첫 번째 hard 페이지(앞표지) 바로 다음에 콘텐츠 페이지 삽입
        const $firstHard = $flipbook.find('.hard').first();
        
        // 모든 페이지를 먼저 생성 (number 순서대로 정렬)
        const pages = [];
        const sortedData = Object.values(pageData).sort(function(a, b) {
            return a.number - b.number;
        });
        
        console.log('페이지 렌더링 시작, 총 항목 수:', sortedData.length);
        
        sortedData.forEach(function(data, index) {
            try {
                // 왼쪽 페이지 (텍스트 중심)
                const $leftPage = $('<div class="page-content" data-slug="' + data.slug + '"></div>');
                $leftPage.append(createLeftPageContent(data));
                
                // 오른쪽 페이지 (이미지 중심)
                const $rightPage = $('<div class="page-content" data-slug="' + data.slug + '"></div>');
                $rightPage.append(createRightPageContent(data));
                
                pages.push($leftPage, $rightPage);
                
                console.log('페이지 생성:', data.slug, '번호:', data.number, '인덱스:', index);
            } catch (error) {
                console.error('페이지 생성 오류:', data.slug, error);
            }
        });
        
        console.log('생성된 페이지 수:', pages.length);
        
        // 모든 페이지를 첫 번째 하드 커버 바로 다음에 삽입
        if (pages.length > 0) {
            $firstHard.after(pages);
        }
        
        // 뒷표지 추가 (기존 뒷표지 제거 후 마지막에 추가)
        $flipbook.find('.hard').not($firstHard).remove();
        const $backCover = $('<div class="hard">Thank You <small>~ 아카이브 북</small></div>');
        $flipbook.append($backCover);
        
        // 디버깅: 렌더링된 페이지 확인
        console.log('렌더링된 페이지 수:', pages.length, '페이지 slug:', pages.map(function(page) {
            return $(page).attr('data-slug');
        }));
    }

    // 텍스트 내 인라인 링크 처리 함수
    // 사용법: [[텍스트|slug]] 형식으로 작성
    // 예: "거세의 악마 [[캐스트라티오|castratio]]의 동생"
    function processInlineLinks(text) {
        if (!text) return '';
        
        // [[텍스트|slug]] 패턴을 찾아서 링크로 변환
        const linkPattern = /\[\[([^\]]+)\|([^\]]+)\]\]/g;
        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = linkPattern.exec(text)) !== null) {
            // 링크 이전 텍스트 추가
            if (match.index > lastIndex) {
                parts.push(document.createTextNode(text.substring(lastIndex, match.index)));
            }
            
            // 링크 요소 생성
            const linkText = match[1]; // 표시될 텍스트
            const linkSlug = match[2]; // 페이지 slug
            const $link = $('<a href="#" class="inline-link" data-slug="' + linkSlug + '">' + linkText + '</a>');
            parts.push($link[0]);
            
            lastIndex = match.index + match[0].length;
        }
        
        // 남은 텍스트 추가
        if (lastIndex < text.length) {
            parts.push(document.createTextNode(text.substring(lastIndex)));
        }
        
        // 부분들을 모두 포함한 jQuery 객체 생성
        if (parts.length === 0) {
            return document.createTextNode(text);
        }
        
        const $container = $('<span></span>');
        parts.forEach(function(part) {
            $container.append(part);
        });
        
        return $container;
    }

    // 왼쪽 페이지 콘텐츠 생성
    function createLeftPageContent(data) {
        const $page = $('<div class="archive-page-left"></div>');
        
        // 큰 제목과 레터링
        const $titleSection = $('<div class="page-title-section"></div>');
        $titleSection.append(`<h1 class="page-main-title">${data.title}</h1>`);
        $titleSection.append(`<h2 class="page-title-kr">${data.titleKr}</h2>`);
        const $speakerIcon = $('<span class="speaker-icon" data-audio="' + data.audioUrl + '">🔊</span>');
        $titleSection.append(`<div class="page-subtitle">${data.subtitle} </div>`);
        $titleSection.find('.page-subtitle').append($speakerIcon);
        $titleSection.find('.page-subtitle').append(`<span class="page-code">${data.code}</span>`);
        $page.append($titleSection);
        
        // 본문 텍스트 (번호 박스를 텍스트와 함께 인라인으로 배치)
        const $contentSection = $('<div class="page-content-text"></div>');
        const $numberBox = $('<div class="page-number-box">' + data.number + '</div>');
        const $contentParagraph = $('<p></p>');
        $contentParagraph.append($numberBox);
        
        // 텍스트 내 링크 처리 ([[텍스트|slug]] 형식)
        const processedContent = processInlineLinks(data.content);
        $contentParagraph.append(processedContent);
        
        $contentSection.append($contentParagraph);
        $page.append($contentSection);
        
        return $page;
    }

    // 오른쪽 페이지 콘텐츠 생성
    function createRightPageContent(data) {
        const $page = $('<div class="archive-page-right"></div>');
        
        // 이미지
        if (data.image) {
            const $imageSection = $('<div class="page-image-section"></div>');
            const $img = $(`<img src="${data.image}" alt="${data.title}" class="page-main-image" />`);
            
            // gifUrl이 있으면 클릭 가능하도록 설정
            if (data.gifUrl) {
                $img.addClass('clickable-image');
                $img.attr('data-gif-url', data.gifUrl);
                $img.css('cursor', 'pointer');
            }
            
            $imageSection.append($img);
            $page.append($imageSection);
        }
        
        // 참조 섹션 (이미지 캡션 자리에 배치)
        const $refSection = $('<div class="page-references"></div>');
        
        // imageCaption 추가
        if (data.imageCaption) {
            const $caption = $('<div class="image-caption"></div>');
            // \n을 <br>로 변환하여 줄바꿈 처리
            const captionText = data.imageCaption.replace(/\n/g, '<br>');
            $caption.html(captionText);
            $refSection.append($caption);
        }
        
        // references 추가
        if (data.references && data.references.length > 0) {
            $refSection.append('<div class="ref-label">[연관항목]:</div>');
            const $refList = $('<div class="ref-list"></div>');
            data.references.forEach(function(ref) {
                const $refLink = $('<a href="#" class="ref-link" data-slug="' + ref.slug + '">' + ref.text + '</a>');
                $refList.append($refLink);
            });
            $refSection.append($refList);
        }
        
        // imageCaption이나 references가 있으면 섹션 추가
        if (data.imageCaption || (data.references && data.references.length > 0)) {
            $page.append($refSection);
        }
        
        return $page;
    }

    // 간단한 페이지 이동 함수 (네비게이션용)
    function goToPageBySlug(slug, retryCount) {
        // retryCount가 undefined나 null인 경우에만 0으로 초기화
        if (retryCount === undefined || retryCount === null) {
            retryCount = 0;
        }
        
        if (!pageData[slug]) {
            console.error('페이지를 찾을 수 없습니다:', slug);
            return;
        }
        
        const $flipbook = $('.flipbook');
        if ($flipbook.length === 0) {
            console.error('플립북을 찾을 수 없습니다.');
            return;
        }
        
        // 플립북 초기화 확인 (전역 플래그와 turn.js 모두 확인)
        if (!flipbookReady) {
            if (retryCount < 20) {
                console.log('플립북 초기화 대기 중...', retryCount);
                setTimeout(function() {
                    goToPageBySlug(slug, retryCount + 1);
                }, 300);
                return;
            } else {
                console.error('플립북 초기화 시간 초과. 직접 시도합니다...');
                // 시간 초과 시에도 시도해봅니다
            }
        }
        
        // turn.js 메서드가 작동하는지 확인
        let totalPages = 0;
        try {
            totalPages = $flipbook.turn('pages');
            if (!totalPages || totalPages === 0) {
                if (retryCount < 20) {
                    console.log('turn.js 페이지 수를 가져올 수 없습니다. 재시도...', retryCount);
                    setTimeout(function() {
                        goToPageBySlug(slug, retryCount + 1);
                    }, 300);
                    return;
                }
            }
        } catch (error) {
            if (retryCount < 20) {
                console.log('turn.js가 아직 준비되지 않았습니다. 재시도...', retryCount);
                setTimeout(function() {
                    goToPageBySlug(slug, retryCount + 1);
                }, 300);
                return;
            } else {
                console.error('turn.js 초기화 실패:', error);
                return;
            }
        }
        
        // pageData에서 number를 가져와서 페이지 번호 계산
        const targetData = pageData[slug];
        if (!targetData || !targetData.number) {
            console.error('페이지 데이터를 찾을 수 없습니다:', slug);
            return;
        }
        
        // 각 항목은 왼쪽/오른쪽 페이지 두 개로 구성
        // 앞표지(1페이지) 다음부터 시작하므로:
        // 항목 1번: 2페이지(왼쪽), 3페이지(오른쪽)
        // 항목 2번: 4페이지(왼쪽), 5페이지(오른쪽)
        // 항목 n번: (n-1)*2 + 2 페이지(왼쪽)
        const pageNumber = (targetData.number - 1) * 2 + 2;
        
        // 페이지 번호 유효성 검사
        if (pageNumber < 1 || pageNumber > totalPages) {
            console.error('유효하지 않은 페이지 번호:', pageNumber, '전체:', totalPages, '항목번호:', targetData.number);
            return;
        }
        
        // DOM에서 해당 페이지가 실제로 존재하는지 확인
        const $targetPage = $flipbook.find('.page-content[data-slug="' + slug + '"]').first();
        if ($targetPage.length === 0) {
            console.error('페이지 요소를 찾을 수 없습니다:', slug);
            const allSlugs = $flipbook.find('.page-content').map(function() {
                return $(this).attr('data-slug');
            }).get();
            console.log('현재 DOM의 모든 페이지 slug:', allSlugs);
            console.log('pageData의 모든 slug:', Object.keys(pageData));
            
            // 페이지가 아직 렌더링되지 않았을 수 있으므로 재시도
            if (retryCount < 5) {
                console.log('페이지가 아직 렌더링되지 않았을 수 있습니다. 재시도...', retryCount);
                setTimeout(function() {
                    goToPageBySlug(slug, retryCount + 1);
                }, 500);
                return;
            }
            
            console.error('페이지를 찾을 수 없어 이동할 수 없습니다.');
            alert('페이지를 찾을 수 없습니다: ' + targetData.titleKr);
            return;
        }
        
        // 현재 페이지 확인
        const currentPage = $flipbook.turn('page');
        console.log('페이지 이동 시도:', slug, '->', pageNumber, '(현재:', currentPage, ')');
        
        if (currentPage === pageNumber) {
            console.log('이미 해당 페이지에 있습니다.');
            return;
        }
        
        // turn.js를 일시적으로 활성화
        $flipbook.turn('disable', false);
        
        // 페이지 이동 실행
        try {
            // 현재 페이지와 목표 페이지가 멀리 떨어져 있으면 점진적으로 이동
            // turn.js가 중간 페이지들을 렌더링할 시간을 줍니다
            const pageDiff = Math.abs(currentPage - pageNumber);
            
            if (pageDiff > 4) {
                console.log('멀리 떨어진 페이지로 점진적 이동:', currentPage, '->', pageNumber);
                
                // 중간 페이지로 먼저 이동하여 렌더링 유도
                const midPage = Math.floor((currentPage + pageNumber) / 2);
                $flipbook.turn('page', midPage);
                
                // 중간 페이지 이동 완료 후 목표 페이지로 이동
                setTimeout(function() {
                    $flipbook.turn('page', pageNumber);
                    console.log('최종 페이지 이동 완료:', pageNumber);
                    
                    // 최종 페이지 이동 완료 후 비활성화
                    setTimeout(function() {
                        try {
                            $flipbook.turn('disable', true);
                            updateNavCurrentPage(); // Nav 업데이트
                        } catch (e) {
                            // turn.js 오류 무시
                        }
                    }, 900);
                }, 800);
            } else {
                // 가까운 페이지는 직접 이동
                $flipbook.turn('page', pageNumber);
                console.log('페이지 이동 성공:', pageNumber);
                
                // 페이지 이동 애니메이션 완료 후 다시 비활성화
                setTimeout(function() {
                    try {
                        $flipbook.turn('disable', true);
                        updateNavCurrentPage(); // Nav 업데이트
                    } catch (e) {
                        // turn.js 오류 무시
                    }
                }, 900);
            }
        } catch (error) {
            console.error('페이지 이동 실패:', error);
            $flipbook.turn('disable', true);
            return;
        }
    }

    // 페이지로 이동하는 함수
    function navigateToPage(slug, retryCount) {
        // retryCount가 undefined나 null인 경우에만 0으로 초기화
        if (retryCount === undefined || retryCount === null) {
            retryCount = 0;
        }
        const maxRetries = 20;
        
        // pageData에 해당 slug가 있는지 확인
        if (!pageData[slug]) {
            console.error('페이지를 찾을 수 없습니다:', slug);
            return;
        }
        
        const $flipbook = $('.flipbook');
        
        // 플립북이 존재하지 않는 경우
        if ($flipbook.length === 0) {
            console.error('플립북을 찾을 수 없습니다.');
            return;
        }
        
        // turn.js가 초기화될 때까지 대기 (try-catch로 확인)
        let isReady = false;
        try {
            const testPage = $flipbook.turn('page');
            if (testPage !== undefined && testPage !== null) {
                isReady = true;
            }
        } catch (e) {
            // turn.js가 아직 초기화되지 않음
            console.log('[navigateToPage] turn.js 초기화 확인 중...', e);
        }
        
        if (!isReady && !flipbookReady) {
            if (retryCount < maxRetries) {
                console.log('[navigateToPage] 플립북 초기화 대기 중...', retryCount);
                setTimeout(function() {
                    navigateToPage(slug, retryCount + 1);
                }, 300);
                return;
            } else {
                console.error('[navigateToPage] 플립북 초기화 시간 초과, 강제 시도');
                // 시간 초과 시에도 시도해봅니다
            }
        }
        
        console.log('[navigateToPage] 페이지 이동 준비 완료, slug:', slug, 'isReady:', isReady, 'flipbookReady:', flipbookReady);
        
        // pageData에서 해당 slug의 number를 이용하여 페이지 번호 계산
        const targetData = pageData[slug];
        if (!targetData || !targetData.number) {
            console.error('페이지 데이터를 찾을 수 없습니다:', slug);
            return;
        }
        
        // 페이지 번호 계산: 앞표지(1페이지) 다음부터 시작
        // 항목 n번 = (n-1)*2 + 2 페이지(왼쪽)
        const pageNumber = (targetData.number - 1) * 2 + 2;
        
        // 전체 페이지 수 확인
        const totalPages = $flipbook.turn('pages');
        console.log('전체 페이지 수:', totalPages, '목표 페이지:', pageNumber);
        
        if (pageNumber < 1 || pageNumber > totalPages) {
            console.error('유효하지 않은 페이지 번호:', pageNumber, '전체:', totalPages);
            return;
        }
        
        // 현재 페이지 확인
        const currentPage = $flipbook.turn('page');
        if (currentPage === pageNumber) {
            console.log('이미 해당 페이지에 있습니다.');
            return;
        }
        
        console.log('페이지 이동 시도:', slug, '-> 페이지', pageNumber, '(현재:', currentPage, ')');
        
        // turn.js를 일시적으로 활성화
        $flipbook.turn('disable', false);
        
        // 페이지 이동 실행
        try {
            // 직접 페이지로 이동
            $flipbook.turn('page', pageNumber);
            console.log('페이지 이동 명령 실행됨:', pageNumber);
            
            // 이동이 제대로 되었는지 확인
            setTimeout(function() {
                const newPage = $flipbook.turn('page');
                console.log('이동 후 페이지:', newPage);
                
                if (newPage !== pageNumber) {
                    console.warn('페이지 이동이 제대로 되지 않았습니다. 재시도...');
                    // 재시도
                    setTimeout(function() {
                        $flipbook.turn('disable', false);
                        $flipbook.turn('page', pageNumber);
                    }, 200);
                }
                
                // 페이지 이동 애니메이션 완료 후 다시 비활성화
                setTimeout(function() {
                    try {
                        $flipbook.turn('disable', true);
                        console.log('플립북 다시 비활성화됨');
                        updateNavCurrentPage(); // Nav 업데이트
                    } catch (e) {
                        // turn.js 오류 무시
                    }
                }, 900);
            }, 100);
        } catch (error) {
            console.error('페이지 이동 실패:', error);
            $flipbook.turn('disable', true);
        }
    }

    // 참조 링크 클릭 이벤트 (references 배열의 링크)
    $(document).on('click', '.ref-link', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $link = $(this);
        const slug = $link.data('slug');
        const text = $link.text();
        
        console.log('참조 링크 클릭됨:', text, 'slug:', slug);
        
        if (!slug) {
            console.error('slug가 없습니다. data-slug 속성을 확인하세요.');
            console.log('링크 요소:', $link);
            return;
        }
        
        // 해당 slug로 페이지 이동
        console.log('navigateToPage 호출:', slug);
        navigateToPage(slug);
    });

    // 인라인 링크 클릭 이벤트 (텍스트 내 링크)
    $(document).on('click', '.inline-link', function(e) {
        e.preventDefault();
        const slug = $(this).data('slug');
        navigateToPage(slug);
    });

    // speaker-icon 클릭 이벤트
    $(document).on('click', '.speaker-icon', function(e) {
        e.preventDefault(); // 기본 동작 방지
        e.stopPropagation(); // 이벤트 버블링 방지 (페이지 넘김 이벤트 전파 차단)
        
        const audioUrl = $(this).data('audio');
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play().catch(function(error) {
                console.error('음성 재생 실패:', error);
                alert('음성 파일을 찾을 수 없습니다.');
            });
        }
    });

    // GIF 모달 생성 함수
    function showGifModal(gifUrl) {
        // 기존 모달이 있으면 제거
        $('#gif-modal').remove();
        
        // 모달 생성
        const $modal = $('<div id="gif-modal" class="gif-modal"></div>');
        const $modalContent = $('<div class="gif-modal-content"></div>');
        const $closeBtn = $('<button class="gif-modal-close">×</button>');
        const $gif = $('<img src="' + gifUrl + '" class="gif-modal-image" alt="GIF" />');
        
        $modalContent.append($closeBtn);
        $modalContent.append($gif);
        $modal.append($modalContent);
        $('body').append($modal);
        
        // 모달 표시
        setTimeout(function() {
            $modal.addClass('active');
        }, 10);
        
        // 닫기 버튼 클릭
        $closeBtn.on('click', function() {
            closeGifModal();
        });
        
        // 모달 배경 클릭 시 닫기
        $modal.on('click', function(e) {
            if ($(e.target).hasClass('gif-modal')) {
                closeGifModal();
            }
        });
        
        // ESC 키로 닫기
        $(document).on('keydown.gifModal', function(e) {
            if (e.key === 'Escape') {
                closeGifModal();
            }
        });
    }
    
    // GIF 모달 닫기 함수
    function closeGifModal() {
        const $modal = $('#gif-modal');
        $modal.removeClass('active');
        setTimeout(function() {
            $modal.remove();
            $(document).off('keydown.gifModal');
        }, 300);
    }

    // 이미지 클릭 이벤트 (GIF 표시)
    $(document).on('click', '.clickable-image', function() {
        const gifUrl = $(this).data('gif-url');
        if (gifUrl) {
            showGifModal(gifUrl);
        }
    });

    // 네비게이션 번호 버튼 클릭 이벤트
    $(document).on('click', '.nav-number-btn', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetNumber = parseInt($(this).data('number'), 10);
        
        // pageData에서 해당 number를 가진 slug 찾기
        let targetSlug = null;
        for (const slug in pageData) {
            if (pageData[slug].number === targetNumber) {
                targetSlug = slug;
                break;
            }
        }
        
        if (targetSlug) {
            console.log('네비게이션에서 페이지 이동:', targetNumber, targetSlug);
            navigateToPage(targetSlug);
        } else {
            console.warn('해당 번호의 페이지를 찾을 수 없습니다:', targetNumber);
        }
    });

    // 목차 페이지 링크 클릭 이벤트
    $(document).on('click', '.toc-link', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const slug = $(this).data('slug');
        if (slug) {
            console.log('목차에서 페이지 이동:', slug);
            goToPageBySlug(slug);
        }
    });

});

