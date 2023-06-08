import { css } from "@emotion/react"
import { useState } from "react"

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

const AscAndDscTable = () => {

  const [sort, setSort] = useState('id')
  const [data, setData] = useState(_data)
  const [isAsc, setIsAsc] = useState(true)

  const handleSort = (_sort: 'id' | 'name' | 'age') => {
    
    if (sort === _sort) {
      if (isAsc) {
        const _data = [...data]
        setData(_data.sort(function(a, b) {
          return (a[_sort] > b[_sort]) ? -1 : 1;
        }))
        setIsAsc(false)
      } else {
        const _data = [...data]
        setData(_data.sort(function(a, b) {
          return (a[_sort] < b[_sort]) ? -1 : 1;
        }))
        setIsAsc(true)
      }
    } else {
      const _data = [...data]
      setData(_data.sort(function(a, b) {
        return (a[_sort] < b[_sort]) ? -1 : 1;
      }))
      setIsAsc(true)
    }

    setSort(_sort)
  }

  return (
    <div css={css`
      font-size: 24px;
    `}>
      <table css={css`
        /* width: 350px; */
        /* table-layout: fixed; */
      `}>
        <thead>
          <tr css={css`
            /* background-color: red; */
            /* width: 350px; */
          `}>
            <th css={styles.width.id}>id <SortIconButton name='id' sort={sort} onClick={() => handleSort('id')}/></th>
            <th css={styles.width.name}>name <SortIconButton name='name' sort={sort}  onClick={() => handleSort('name')}/></th>
            <th css={styles.width.age}>age <SortIconButton name='age' sort={sort}  onClick={() => handleSort('age')}/></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d) => {
              return (
                <tr
                  key={d.id}
                  css={css`
                  `}
                >
                  <td css={styles.width.id}>{d.id}</td>
                  <td css={styles.width.name}>{d.name}</td>
                  <td css={styles.width.age}>{d.age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AscAndDscTable