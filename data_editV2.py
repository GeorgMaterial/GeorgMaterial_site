import os
import csv

data = 'data.js'

home = os.getcwd()

def collect_data():
    read_data = open(data)
    data_content = read_data.read()
    read_data.close()
    return data_content

def pick_category():
    count = 1
    while count <= 3:
        print(f"What would you like to edit? (attempt {count}/3) \n")
        print("1. shows\n2. songs\n3. visuals\n4. blog\n5. about\n")
        x = input(">>>>>> ")
        if x == '1' or x == 'shows':
            return 'shows'
        elif x == '2' or x == 'songs':
            return 'songs'
        elif x == '3' or x == 'visuals':
            return 'visuals'
        elif x == '4' or x == 'blog':
            return 'blog'
        elif x == '5' or x == 'about':
            return 'about'
        else:
            print("\nSorry, I'm not sure what you meant by that.\n")
            print("let's try again.\n")
        count += 1

    

def compile_data_csv(category):
    obj_array = []
    os.chdir('databases')
    with open(category + '.csv') as database:
        csv_reader = csv.reader(database, delimiter=',')
        index = 0
        for row in csv_reader:
            if index != 0:
                if category == 'songs':
                    obj = SongObj(row)
                elif category == 'shows':
                    obj = ShowObj(row)
                elif category == 'visuals':
                    obj = VisualObj(row)
                elif category == 'blog':
                    obj = BlogObj(row)
                elif category == 'about':
                    obj = AboutObj(row)
                obj.id = index - 1
                obj_array.append(obj)
            index += 1
    os.chdir(home)
    return format_json(obj_array)
        

def format_json(array):
    new_array = []
    for obj in array:
        x = obj.obj_dict()
        new_array.append(x)
    return new_array


class SongObj():
    
    def __init__(self,row):
        self.title = row[0]
        self.year = row[1]
        self.rel = row[2]
        self.spotify = row[3]
        self.apple = row[4]
        self.bandcamp = row[5]
        self.youtube = row[6]
        self.soundcloud = row[7]
        self.about = row[8]

    def import_lyrics(self):
        lyrics = ""
        os.chdir("lyrics")
        listdir = os.listdir()
        if (self.title + ".txt") in listdir:
            with open(self.title + ".txt") as lyric_file:
                lyrics = lyric_file.read()
                lyrics = lyrics.replace("\n",'<br>" + \n"')
        os.chdir(home)
        return lyrics

    def obj_dict(self):
        x = f'''
{{
    id: "{self.id}",
    title: "{self.title}",
    year: "{self.year}",
    released: "{self.rel}",
    listen: [{{
        spotify_url: "{self.spotify}",
        apple_music_url: "{self.apple}",
        youtube_url: "{self.youtube}",
        bandcamp_url: "{self.bandcamp}",
        soundcloud_url: "{self.soundcloud}"
    }}],
    lyrics: "{self.import_lyrics()}",
    about: "{self.about}"
}}'''
        return x
    

class ShowObj():
    def __init__(self,row):
        self.title = row[0]
        self.date = row[1]
        self.time = row[2]
        self.tickets = row[3]
        self.venue = row[4]

    def obj_dict(self):
        x = {
            "title": self.title,
            "date": self.date,
            "time": self.time,
            "tickets": self.tickets,
            "venue": self.venue
        }
        return x

class VisualObj():
    pass

class BlogObj():
    pass

class AboutObj():
    pass


def write_to_file(old_data, new_data, category):
    with open(data,'w') as data_file:
        split_data = old_data.split(f'//{category}')
        split_data[1] = f'''//{category} 
        {new_data}
        //{category}'''
        new_content = ''.join(split_data)
        print("done\n")
        data_file.write(new_content)

if __name__ == '__main__':
    old_data = collect_data()
    cat = pick_category()
    new_data = ',\n'.join(compile_data_csv(cat))
    write_to_file(old_data,new_data,cat)
