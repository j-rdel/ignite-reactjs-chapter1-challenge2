import { Button } from './Button';

interface Genres{
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    title: string,
}

interface SideBarProps{
  genres: Genres[],
  setGenre: (id: number) => void,
  SelectedGenre: number
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container"> 
        {props.genres.map(genre => {
            return <Button 
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.setGenre(genre.id)}
              selected={props.SelectedGenre === genre.id}
            />
        })}
      </div>
    </nav>
  )
}