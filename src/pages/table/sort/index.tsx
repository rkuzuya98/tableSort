import { css } from "@emotion/react"
import { useState } from "react"
import AscTable from "./components/AscTable"
import AscAndDscTable from "./components/AscAndDscTable"

type Data = {
  id: number,
  name: string,
  age: number
}

const _data = [
  { id: 1, name: 'Tom', age: 76},
  { id: 2, name: 'Andy', age: 99},
  { id: 3, name: 'Zac', age: 48},
  { id: 4, name: 'Bob', age: 12},
  { id: 5, name: 'Yan', age: 20},
]

const styles = {
  td: css`
    border: 1px solid #333;
  `,
  width: {
    id: css`
      width: 150px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    `,
    name: css`
      width: 200px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    `,
    age: css`
      width: 150px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    `,
  }
}

const SortIconButton = ({
  name,
  sort,
  onClick
}: {
  name: string,
  sort: string
  onClick: () => void
}) => {

  return (
    <button css={sort === name && css`
      background-color: green;
    `} onClick={onClick}>⇅</button>
  )
}

const SortTablePage = () => {

  const [sort, setSort] = useState('id')
  const [data, setData] = useState(_data)

  const handleSort = (sort: 'id' | 'name' | 'age') => {
    setData(data.sort(function(a, b) {
      return (a[sort] < b[sort]) ? -1 : 1;
    }))
    setSort(sort)
  }

  return (
    <div css={css`
      font-size: 24px;
    `}>
      <div>パターン①：ソートは昇順のみのシンプルなテーブル</div>
      <AscTable/>
      <br/>
      <div>パターン②：ソートは昇順と降順のテーブル</div>
      <AscAndDscTable/>
    </div>
  )
}

export default SortTablePage