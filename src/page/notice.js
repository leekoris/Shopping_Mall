import React from "react";
import styled from "styled-components";

export function notice() {
    return (
        <div>
            <h1>
                공지사항</h1>

            <Cover>
                <table>
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>첫번째 게시글입니다.</td>
                            <td>2020-10-25</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>두번째 게시글입니다.</td>
                            <td>2020-10-25</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>세번째 게시글입니다.</td>
                            <td>2020-10-25</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>네번째 게시글입니다.</td>
                            <td>2020-10-25</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>다섯번째 게시글입니다.</td>
                            <td>2020-10-25</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>

                <div class="page_wrap">
                    <div class="page_nation">
                        <a class="arrow pprev" href="#"></a>
                        <a class="arrow prev" href="#"></a>
                        <a href="#" class="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>

                        <a class="arrow next" href="#"></a>
                        <a class="arrow nnext" href="#"></a>
                    </div>
                </div>

                <div>
                    <input type="text" palceholder="입ㄹ겨"/>
                    <button>검색</button>
                </div>

            </Cover>

        </div>
    )
}

const Cover = styled.div `
  div {

  }
`;
