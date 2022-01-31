import bpy;

#Rotate a cube by 90 degrees
def rotate_cube(cube, angle):
  bpy.data.objects[cube].rotation_euler = (0, 0, angle)

#Rotate camera by 60 degrees and change it to orthographic view
def change_camera(camera):
  bpy.data.objects[camera].rotation_euler = (0, 0, 0)
  bpy.data.objects[camera].data.type = 'ORTHO'

#Get the select object
def get_selected_object():
  return bpy.context.selected_objects[0]

#Select all mesh
def select_all_mesh(): 
  bpy.ops.object.select_all(action='SELECT')