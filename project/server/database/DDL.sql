CREATE TABLE `t_book_board`(
    `no` int AUTO_INCREMENT,
    `name` varchar(1000) NOT NULL,
    `writer` varchar(1000),
    `publisher` varchar(1000),
    `publication_date` datetime DEFAULT current_timestamp(),
    `info` varchar(4000),
    PRIMARY KEY (`no`)  
);

INSERT INTO `t_book_board` (`no`, `name`, `writer`, `publisher`, `publication_date`, `info`)
VALUES 
        (100, '아침 그리고 저녁', '욘 포세', '문학동네', '2019-09-26','언젠가는 사라져 존재하지 않겠지만 그래 여기 머물러라' ),
        (101, '그대들 어떻게 살 것인가', '요시노 겐자부로', '양철북', '2012-06-28','100년 가까이 사랑받아 온 청소년 인생론의 고전' ),
        (102, '모순', '양귀자', '쓰다', '2013-04-01','인생은 탐구하면서 살아가는 것이 아니라, 살아가면서 탐구하는 것이다.' ),
        (103, '아주 작은 습관의 힘', '제임스 클리어', '비즈니스북스', '2019-02-26','더이상 아무것도 할 수 없을 것 같았던 때 조금씩 시도한 아주 작은 일들이 삶을 바꿨다!' );

COMMIT;
